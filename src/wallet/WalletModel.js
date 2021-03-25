import { _ } from '../util/util.js';
import Observable from '../util/Observable.js';

export default class WalletModel extends Observable {
  constructor({ moneyData, currency }) {
    super();
    this.moneyMap = new Map(moneyData);
    this.currency = currency;
  }

  useMoney({ money }) {
    money = Number(money);
    this.moneyMap.set(money, this.moneyMap.get(money) - 1);

    this.dispatchEvent(
      new CustomEvent('use-money', {
        detail: {
          money,
          moneyCnt: this.moneyMap.get(money)
        },
      })
    );
  }

  getMoneyData() {
    return [...this.moneyMap.entries()];
  }

  getCurrency() {
    return this.currency;
  }
}