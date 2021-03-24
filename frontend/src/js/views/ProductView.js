import _ from '../utils/util.js';
import { fetchData } from '../utils/dataUtil.js';

class ProductView {
    constructor({ productModel, walletModel }) {
        this.productModel = productModel;
        this.walletModel = walletModel;
        this.productViewWrapper = _.$(this.productModel.productWrapSelector);

        this.init();
    }

    init = async () => {
        const productItemData = await this.getProductInitData();

        this.productModel.setProductInitData(productItemData.data);
        this.renderInitView(this.productViewWrapper, productItemData);

        // this.productModel.subscribe(() =>
        //     updateRender(구입 가능한 상품일때!!) View,
        // );
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
        <li class="product-item-container">
            <div class="product-item-img-container">
                <img src=${imgurl} class="img-fluid"/>
            </div>
            <div class="product-info-container">
                <button class="btn btn-secondary">${name}</button>
                <span class="item-price">${price}</span>
            </div>
        </li>
        `;
        return html;
    };
}

export default ProductView;
