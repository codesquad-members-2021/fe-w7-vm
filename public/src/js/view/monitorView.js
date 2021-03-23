import { getMonitorMoneyHTML, getMonitorStatusHTML } from '../htmlTemplate';
import WalletModel from '../model/walletModel';
import { _ } from '../util/util';

class MonitorView {
  constructor({ walletModel, vendingModel }) {
    this.walletModel = walletModel;
    this.vendingModel = vendingModel;
    this.monitorMoneyArea = _.$('.monitor-money');
    this.monitorStatusArea = _.$('.monitor-status');
    this.monitorBtn = _.$('.monitor-btn');
    this.init();
  }
  init() {
    this.render();
    //wallet에 subscribe - walletClickCbFn
    //vending machine에 반환 옵저버에 subsribe - returnClickCbFn
    //vending machine에 vending 옵저버에 subscribe - vendingClickCbFn
  }
  addEvent() {
    this.monitorBtn.addEventListener('click', this.handleClick.bind(this));
  }
  render() {
    this.renderVendingMoney();
    this.renderVendingStatus();
  }
  handleClick() {
    //옵저버 notify
  }
  walletClickCbFn(money) {
    this.updateVendingMoney({ money, plus: true });
    this.renderVendingMoney();
    this.setPlusMoneyStatus(money);
    this.renderVendingStatus();
  }
  returnClickCbFn() {
    const vendingMoney = this.vendingModel.getVendingMoney();
    this.updateVendingMoney({ money: vendingMoney, plus: false });
    this.renderVendingMoney();
    this.setReturnStatus(vendingMoney);
    this.renderVendingStatus();
  }
  vendingClickCbFn(food) {
    const food = this.vendingModel.getFoodItem(food);
    this.updateVendingMoney({ money: food.price, plus: false });
    this.renderVendingMoney();
    this.setFoodStatus(food);
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
  updateVendingMoney({ money, plus = true }) {
    const vendingMoney = this.vendingModel.getVendingMoney();
    const newVendingMoney = plus ? vendingMoney + money : vendingMoney - money;
    this.vendingModel.setVendingMoney(newVendingMoney);
  }
  setPlusMoneyStatus(money) {
    const plusMoneyStatus = `${money}원이 투입됐음`;
    this.vendingModel.setVendingStatus(plusMoneyStatus);
  }
  setReturnStatus(money) {
    const returnStatus = `잔돈 ${money}원이 반환됐음`;
    this.vendingModel.setVendingStatus(returnStatus);
  }
  setFoodStatus(food) {
    const foodStatus = `${food}가 선택됨`;
    this.vendingModel.setVendingStatus(foodStatus);
  }
}

export default MonitorView;
