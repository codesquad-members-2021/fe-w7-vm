import Observable from '../utils/Observable.js';

class ProductModel extends Observable {
    constructor() {
        super();
        this.products;
    }

    insertProductInitData = (productInitData) => {
        this.products = productInitData.map((data) => ({
            ...data,
            count: Math.floor(Math.random() * 10) + 1,
        }));
    };

    updateProductCount = (productData) => {
        if (!productData) return;
        const findData = this.products.find((product) => product.name === productData.name);
        (findData.count > 0) && findData.count--;

        this.notify(productData);
    };
};

export default ProductModel;