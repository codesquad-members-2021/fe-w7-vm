import ProductModel from './models/ProductModel.js';
import WalletModel from './models/WalletModel.js';
import ProductView from './views/ProductView.js';
import WalletView from './views/WalletView.js';

const REFERENCE = {
    product: {
        productWrapSelector: '#productWrapper',
        productItemBtnSelector: '#productItem',
    },
    wallet: {
        walletWrapSelector: '#walletWrapper',
        budgetTotalSelector: '#budgetContainer'
    },
};

const init = () => {
    const productModel = new ProductModel();
    const walletModel = new WalletModel();
    new ProductView(productModel, walletModel, REFERENCE.product);
    new WalletView(walletModel, REFERENCE.wallet);
    // new WalletView();
};

init();

