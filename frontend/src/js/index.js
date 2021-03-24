import ProductModel from './models/ProductModel.js';
import ProductView from './views/ProductView.js';

const REFERENCE = {
    product: {
        productWrapSelector: '#productWrapper',
    },

    progress: {
        progressWrapSelector: '',
    },

    wallet: {
        walletWrapSelector: '',
    },
};

const productModel = new ProductModel(REFERENCE.product);
new ProductView({ productModel });