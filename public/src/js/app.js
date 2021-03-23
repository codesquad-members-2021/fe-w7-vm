import WalletModel from './model/walletModel';
import VendingModel from './model/vendingMachineModel';
import MonitorView from './view/monitorView';
import ProductView from './view/productView';
import WalletView from './view/walletView';

console.log('hello');

const walletModel = new WalletModel();
const vendingModel = new VendingModel();

const monitorView = new MonitorView({ walletModel, vendingModel });
const productView = new ProductView(walletModel, vendingModel);
const walletView = new WalletView(walletModel, vendingModel);
