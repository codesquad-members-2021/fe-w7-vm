import CreateMoneyData from '../models/createMoneyData';
import FetchTest from '../models/fetchTest';
import OperatingView from './operatingView';
import OrderScreen from './orderScreen';
import WalletView from './walletView';

const orderScreen = new OrderScreen();
const operatingView = new OperatingView();
const walletView = new WalletView();
const fetchTest = new FetchTest();
fetchTest.getData();
const randomNumber = new CreateMoneyData();
console.log(randomNumber.getCount());

const orderScreenBox = orderScreen.render();
const operatingBox = operatingView.render();
const walletBox = walletView.render();

export default class MainView {
  init() {
    return this.render();
  }
  render() {
    return `
    <div class="body__container">
      <div class="vending-machine">
        ${orderScreenBox}
        ${operatingBox}
      </div>
      <div class="raccoon-wallet">
        ${walletBox}
      </div>
    </div>
    `;
  }
}
