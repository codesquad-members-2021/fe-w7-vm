import ProductModel from './models/ProductModel.js';
import WalletModel from './models/WalletModel.js';
import ProductView from './views/ProductView.js';
import WalletView from './views/WalletView.js';

const REFERENCE = {
    product: {
        productWrapSelector: '#productWrapper',
    },
    wallet: {
        walletWrapSelector: '#walletWrapper',
        budgetTotalSelector: '#budgetContainer'
    },
};

const productModel = new ProductModel(REFERENCE.product);
const walletModel = new WalletModel();

new ProductView({ productModel, walletModel });
new WalletView(walletModel, REFERENCE.wallet);