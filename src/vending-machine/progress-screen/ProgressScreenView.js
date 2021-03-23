import './style.scss';
import { _ } from '../../util/util.js';
import MoneySumView from './MoneySumView.js';
import LogListView from './log/LogListView.js';

export default class ProgressScreenView {
  constructor() {
    this.$target;
    this.moneySumView;
    this.logListView;
    this.init();
  }

  init() {
    this.$target = this.createEl();
    this.moneySumView = new MoneySumView();
    this.logListView = new LogListView();
    this.render();
  }

  updateMoneySum(moneySum) {
    this.moneySumView.updateSum(moneySum);
  }

  appendLog(log) {
    this.logListView.appendLog(log);
  }

  createEl() {
    return _.genEl('DIV', {
      classNames: ['progress-screen'],
    });
  }

  getEl() {
    return this.$target;
  }

  render() {
    this.$target.appendChild(this.moneySumView.getEl());
    this.$target.appendChild(this.logListView.getEl());
  }
}