import { _ } from '../util/util.js';
import Observable from '../util/Observable.js';

export default class WalletModel extends Observable {
  constructor({ moneyData }) {
    super();
    this.moneyMap = new Map(moneyData);
  }

  useMoney({ money }) {
    this.moneyMap.set(money, this.moneyMap[money] - 1);

    this.dispatchEvent(
      new CustomEvent('use-money', {
        detail: {
          money,
          moneyCnt: this.moneyMap[money]
        },
      })
    );
  }

  getMoneyData() {
    return [...this.moneyMap.entries()];
  }
}