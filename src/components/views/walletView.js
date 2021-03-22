export default class WalletView {
  constructor() {
    this.unitMoneyArray = [10, 50, 100, 500, 1000, 5000, 10000];
  }
  renderWalletMoney() {
    return `
      <div class="order--title">
        ${this.title}
      </div>
      `;
  }

  getWalletMoney() {}

  renderUnitMoneyButton() {}

  getOperatingInfo() {}

  getUnitMoneyButton() {}
}
