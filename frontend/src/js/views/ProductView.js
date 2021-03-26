import _ from '../utils/util.js';
import { fetchData } from '../utils/dataUtil.js';

class ProductView {
    constructor(productModel, walletModel, productReference) {
        this.productModel = productModel;
        this.walletModel = walletModel;
        this.productReference = productReference;

        this.productViewWrapper = _.$(
            this.productReference.productWrapSelector,
        );

        this.init();
    }

    init = async () => {
        const productItemData = await this.getProductInitData();

        this.productModel.insertProductInitData(productItemData.data);
        this.renderInitView(this.productViewWrapper, productItemData);
        this.setProductViewBtnClickEvent(this.productViewWrapper);
    };

    // renderInitView, 상품들 초기 Render
    renderInitView = async (productViewWrapper, productItemData) => {
        productItemData.data.forEach((data) => {
            const html = this.setCreateProductHtml(data);
            productViewWrapper.insertAdjacentHTML('beforeend', html);
        });
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

    // setCreateProductHtml, 상품의 HTML 생성
    setCreateProductHtml = ({ name, price, imgurl }) => {
        const html = `
        <li class="product-item-container disabled__item">
            <div class="product-item-img-container">
                <img src=${imgurl} class="img-fluid"/>
            </div>
            <div class="product-info-container" id="product__item">
                <button class="btn btn-secondary disabled disabled__item">${name}</button>
                <span class="item-price">${price}</span>
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

    // 상품 구매 가능할 때 다시 활성화 (리팩토링 필요)
    renderActiveItem = (inputMoney) => {
        const nInputMoney =  Number(inputMoney.replace(/,|원/g, ''));
        const productBtnList = _.$all('#product__item button');

        productBtnList.forEach((productBtn) => {
            const price = Number(productBtn.nextElementSibling.textContent);
            if (price > nInputMoney) return;
            const productParentWrap = productBtn.closest('li');
            _.removeClass(productBtn, 'disabled', 'disabled__item');
            _.removeClass(productParentWrap, 'disabled__item');
        })
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
