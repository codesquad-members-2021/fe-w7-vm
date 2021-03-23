import { getMonitorMoneyHTML, getMonitorStatusHTML } from '../htmlTemplate';
import WalletModel from '../model/walletModel';
import { _ } from '../util/util';

class MonitorView {
  constructor({ walletModel, vendingModel }) {
    this.walletModel = walletModel;
    this.vendingModel = vendingModel;
    this.monitorMoney = _.$('.monitor-money');
    this.monitorStatus = _.$('.monitor-status');
    this.init();
  }
  init() {
    this.render();
  }
  render() {
    this.renderVendingMoney();
    this.renderVendingStatus();
  }
  renderVendingMoney() {
    const vendingMoney = this.vendingModel.getVendingMoney();
    const monitorMoneyHTML = getMonitorMoneyHTML(vendingMoney);
    this.monitorMoney.innerHTML = monitorMoneyHTML;
  }
  renderVendingStatus() {
    const vendingStatus = this.vendingModel.getVendingStatus();
    const statusHTML = vendingStatus.reduce((acc, curr) => acc + getMonitorStatusHTML(curr), '');
    this.monitorStatus.innerHTML = statusHTML;
  }
  updateVendingMoney({ price, plus = true }) {
    const vendingMoney = this.vendingModel.getVendingMoney();
    const newVendingMoney = plus ? vendingMoney + price : vendingMoney - price;
    this.vendingModel.setVendingMoney(newVendingMoney);
  }
}

export default MonitorView;
