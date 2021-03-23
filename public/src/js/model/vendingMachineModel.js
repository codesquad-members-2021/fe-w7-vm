import Observable from '../observer';
import { initMoney } from '../dataSetting.js';

class VendingModel extends Observable {
  constructor(food) {
    super();
    this.food = food;
    this.vendingMoney = 10000;
    this.vendingStatus = ['500원이 투입됐음', '500원이 투입됐음'];
  }
  getFood() {
    return this.food;
  }
  setFood() {}
  getVendingMoney() {
    return this.vendingMoney;
  }
  setVendingMoney() {}
  getVendingStatus() {
    return this.vendingStatus;
  }
  setVendingStatus(status) {
    this.vendingStatus.push(status);
  }
  clearVendingStatus() {
    this.vendingStatus = [];
  }
}

export default VendingModel;
