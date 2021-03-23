import _ from '../../util/util.js';
import Observable from '../../util/Observable.js';
import ProgressScreenView from './ProgressScreenView.js';

export default class ProgressScreenModel extends Observable {
  constructor({ moneySum, logs } = {}) {
    super();
    this.view;
    this.moneySum = moneySum;
    this.logs = logs;
    this.init();
  }

  init() {
    this.view = new ProgressScreenView();
  }

  addMoney(money) {
    this.setMoneySum(this.moneySum + money);
  }

  setMoneySum(moneySum) {
    this.moneySum = moneySum;
    this.view.updateMoneySum(this.moneySum);

    this.dispatchEvent(
      new CustomEvent('update-money-sum', {
        detail: { moneySum: this.moneySum }
      })
    );
  }

  appendLog(log) {
    this.logs.push(log);
    this.view.appendLog(log);

    this.dispatchEvent(
      new CustomEvent('append-log', {
        detail: { log: this.log }
      })
    );
  }

  getView() {
    return this.view;
  }
}