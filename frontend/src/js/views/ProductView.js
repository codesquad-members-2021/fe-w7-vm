import _ from '../utils/util.js';
import { fetchData } from '../utils/dataUtil.js';
import WalletModel from "../models/WalletModel.js"; // 임시. 마지막에 지우기 (요로케하면 모델 메서드 바로찾아요)
import ProductModel from "../models/ProductModel.js"; // 임시. 마지막에 지우기

class ProductView {
    /**
     * @param {ProductModel} ProductModel
     * @param {WalletModel} walletModel
     * @param {*} productReference
     */
    constructor(productModel, walletModel, productReference) {
        this.productModel = productModel;
        this.walletModel = walletModel;
        const { productWrapSelector, productBtnsSelector } = productReference;

        this.productViewWrapper = _.$(productWrapSelector);
        this.productBtns;
        this.productBtnsSelector = productBtnsSelector;

        this.init();
    }

    init = async () => {
        this.setWalletSubscribe();
        const productItemData = await this.getProductInitData();

        this.productModel.insertProductInitData(productItemData.data);
        this.renderInitView(this.productViewWrapper, productItemData);

        this.productBtns = _.$all(this.productBtnsSelector, this.productViewWrapper);  // 꼭 renderInitView 후 실행
        this.setProductViewBtnClickEvent(this.productViewWrapper);
    };

    // WalletModel Subscribe [ProductView]
    setWalletSubscribe = () => {
        // WalletView의 지갑 버튼 클릭시..
        this.walletModel.walletViewObserver.subscribe(
            // 투입 금액에 따라 활성
            this.renderActiveItem.bind(this)
        );
    };

    // getProductInitData, 서버에서 상품 정보들을 가져옴
    getProductInitData = async () => {
        try {
            const url = '/api/products';
            return await fetchData(url);
        } catch (error) {
            console.error(error);
        }
    };

    // renderInitView, 상품들 초기 Render
    renderInitView = async (productViewWrapper, productItemData) => {
        productItemData.data.forEach((data) => {
            const html = this.setCreateProductHtml(data);
            productViewWrapper.insertAdjacentHTML('beforeend', html);
        });
    };

    // setCreateProductHtml, 상품의 HTML 생성
    setCreateProductHtml = ({ name, price, imgurl }) => {
        const html = `
        <li class="product-item-container disabled__item">
            <div class="product-item-img-container">
                <img src=${imgurl} class="img-fluid"/>
            </div>
            <div class="product-info-container" id="product__item">
                <button class="btn btn-secondary disabled disabled__item">${name}</button>
                <span class="item-price">${price + (Math.floor(Math.random() * 20) * 1000)}</span>
            </div>
        </li>
        `;
        return html;
    };

    // 상품을 클릭했을 시 이벤트 (구매 시)
    setProductViewBtnClickEvent = (productViewWrapper) =>
        _.addEvent(productViewWrapper, 'click', (e) =>
            this.productViewBtnClickEventHandler(e),
        );
    productViewBtnClickEventHandler = ({ target }) => {
        if (this.isDisabledItem(target)) return;

        const rootBtnWrap = target.closest('li');
        if (target.tagName !== 'BUTTON' || rootBtnWrap.tagName !== 'LI') return;

        const targetName = target.innerText;
        const productDatas = this.productModel.products;
        const clickProductData = productDatas.find(
            (productData) => productData.name === targetName,
        );
        if (!clickProductData) return;

        this.productModel.updateProductCount(clickProductData);
        this.renderDisableItem(clickProductData, target, rootBtnWrap);
    };

    // 재고 없을 시 비활성
    renderDisableItem = ({count}, target, targetRootWrap) => {
        if (count > 0) return;

        _.addClass(target, 'disabled', 'disabled__item');
        _.addClass(targetRootWrap, 'disabled__item');
    };

    // 상품 구매 가능할 때 다시 활성화
    renderActiveItem = ({insertTotal}) => {
        this.productBtns.forEach((productBtn) => {
            const price = Number(productBtn.nextElementSibling.textContent);
            if (price > insertTotal) return;
            const productParentWrap = productBtn.closest('li');
            _.removeClass(productBtn, 'disabled', 'disabled__item');
            _.removeClass(productParentWrap, 'disabled__item');
        });
    };

    // Disabled 관련 className 체크
    isDisabledItem = (target) => {
        const findDisabled = target.className
            .split(' ')
            .find(
                (className) =>
                    className === 'disabled' || className === 'disabled__item',
            );
        return findDisabled;
    };
}

export default ProductView;
