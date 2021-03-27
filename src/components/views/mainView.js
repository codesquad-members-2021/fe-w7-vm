import OperationView from './operationView';
import ProductView from './productView';
import WalletView from './walletView';

export default class MainView {
  constructor() {
    this.operationView = new OperationView();
    this.productView = new ProductView();
    this.walletView = new WalletView();
  }

  async init() {
    return await this.render();
  }
  async render() {
    return `
    <div class="body__container">
      <div class="vending-machine">
        ${await this.productView.render()}
        ${this.operationView.render()}
      </div>
      <div class="raccoon-wallet">
        ${this.walletView.render()}
      </div>
    </div>
    `;
  }
}
