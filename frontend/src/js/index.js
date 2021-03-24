import ProductModel from './models/ProductModel.js';
import WalletModel from './models/WalletModel.js';
import ProductView from './views/ProductView.js';
import WalletView from './views/WalletView.js';

const REFERENCE = {
    product: {
        productWrapSelector: '#productWrapper',
    },
    wallet: {
        // walletWrapSelector: '#walletWrapper',    // 필요없음
        walletWrapTempSelector: '#walletWrapperTemp',   // 변경가능 *임시
        // total이 있을수도..
    },
};

const productModel = new ProductModel(REFERENCE.product);
const walletModel = new WalletModel(REFERENCE.wallet);

new ProductView({ productModel, walletModel });
// new WalletView();