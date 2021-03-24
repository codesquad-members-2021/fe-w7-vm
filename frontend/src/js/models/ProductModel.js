import Observable from '../utils/Observable.js';

class ProductModel extends Observable {
    constructor(productReference) {
        super();
        const { productWrapSelector } = productReference;
        this.productWrapSelector = productWrapSelector;
        this.products;
    }

    setProductInitData = (productInitData) => {
        this.products = productInitData.map((data) => ({
            ...data,
            count: Math.floor(Math.random() * 10) + 1,
        }));        
    };

    getProductPrice = (product) => (this.products[product].price);
    setUpdateProductCount = (product) => (this.products[product].count--);
};

export default ProductModel;
