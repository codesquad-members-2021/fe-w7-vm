import Observable from "../utils/Observable.js";

class ProductModel {
    constructor() {
        this.products;
    }

    insertProductInitData = (productInitData) => {
        this.products = productInitData.map((data) => ({
            ...data,
            count: Math.floor(Math.random() * 10) + 1,
        }));
    };

    updateProductCount = (productData) => {
        if (!productData || productData.count <= 0) return;
        productData.count--;
    };
};

export default ProductModel;