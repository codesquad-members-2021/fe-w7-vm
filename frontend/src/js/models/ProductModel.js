import Observable from "../utils/Observable.js";

class ProductModel {
    constructor() {
        this.products;
        this.productViewObserver = new Observable();
    }

    insertProductInitData = (productInitData) => {
        this.products = productInitData.map((data) => ({
            ...data,
            count: Math.floor(Math.random() * 10) + 1,
        }));
    };

    updateProductCount = (productBtnName) => {
        const productData = this.products.find(product => product.name === productBtnName);
        if (!productData || productData.count <= 0) return;
        productData.count--;
    };

    //ProductView에서 상품 버튼 클릭 시.. (통합) : ProductModel
    updateForProgressViewProductBtn = (productBtn) => {
        this.updateProductCount(productBtn.innerText);
        // this.productViewObserver.notify(this); // 나중에......
    };

};

export default ProductModel;