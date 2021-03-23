import _ from '../../util/util.js';
import Observable from '../../util/Observable.js';

export default class ProgressScreenModel extends Observable {
  constructor ({ moneySum, logs } = {}) {
    super();
    this.moneySum = moneySum ?? 0;
    this.logs = logs ?? [];
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

  setLogs(logs) {
    this.logs = logs;
    this.dispatchEvent(
      new CustomEvent('update-logs', {
        detail: { logs: this.logs }
      })
    );
  }

  appendLog(log) {
    this.logs.push(log);
    this.dispatchEvent(
      new CustomEvent('append-log', {
        detail: { log: this.log }
      })
    );
  }
}