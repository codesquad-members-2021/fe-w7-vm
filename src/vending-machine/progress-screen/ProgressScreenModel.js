import _ from '../../util/util.js';
import Observable from '../../util/Observable.js';

export default class ProgressScreenModel extends Observable {
  constructor({ moneySum, logs, currency }) {
    super();
    this.moneySum = moneySum ?? 0;
    this.currency = currency;
    this.logs = logs ?? [];
    this.returnMoneyTimer; 
  }

  reduceMoney(price) {
    this.setMoneySum(this.moneySum - price);
  }

  addMoney(money) {
    this.setMoneySum(this.moneySum + money);
  }

  setMoneySum(moneySum) {
    this.moneySum = moneySum;

    this.dispatchEvent(
      new CustomEvent('update-money-sum', {
        detail: { moneySum: this.moneySum }
      })
    );
  }

  appendLog(log) {
    this.logs.push(log);

    this.dispatchEvent(
      new CustomEvent('append-log', {
        detail: { log }
      })
    );
  }

  getMoneySum() {
    return this.moneySum;
  }

  getCurrency() {
    return this.currency;
  }
}