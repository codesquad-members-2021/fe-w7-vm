import './style.scss';
import { _ } from '../../util/util.js';
import Observable from '../../util/Observable.js';

export default class ProgressScreenModel extends Observable {
  constructor ({ sum, logs }) {
    this.sum = sum ?? 0;
    this.logs = logs ?? [];
  }

  setSum(sum) {
    this.sum = sum;
    this.dispatchEvent(
      new CustomEvent('update-logs', {
        detail: { sum: this.sum }
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