import WalletModel from './model/walletModel';
import VendingModel from './model/vendingMachineModel';
import MonitorView from './view/monitorView';
import ProductView from './view/productView';
import WalletView from './view/walletView';
import {
   myMoney,
   beverage
} from './dataSetting';
console.log('hello');

const walletModel = new WalletModel(myMoney);
const vendingModel = new VendingModel(beverage);

const monitorView = new MonitorView(walletModel);
const productView = new ProductView(walletModel);
const walletView = new WalletView(walletModel);