import ProductModel from './models/ProductModel.js';
import WalletModel from './models/WalletModel.js';
import ProductView from './views/ProductView.js';
import WalletView from './views/WalletView.js';
import ProgressView from './views/ProgressView.js';

const REFERENCE = {
    product: {
        productWrapSelector: '#productWrapper',
        productBtnsSelector: '#product__item button',
    },
    wallet: {
        walletWrapSelector: '#walletWrapper',
        budgetTotalSelector: '#budgetContainer',
        currencyBtnsSelector: '.currency-btn',
    },
    progress: {
        progressWrapSelector: '#progressWrapper',
        inputMoneyStatusSelector: '.progress-current-value',
        balanceAlertSelector:'.progress-balance-alert',
        progressStatusSelector : '.progress-current-status',
        returnMoneyBtnSelector: '#returnBtn'
    },
};

const init = () => {
    const productModel = new ProductModel();
    const walletModel = new WalletModel();

    new ProductView(productModel, walletModel, REFERENCE.product);
    new WalletView(walletModel, REFERENCE.wallet);
    new ProgressView(walletModel, REFERENCE.progress);
};

init();
