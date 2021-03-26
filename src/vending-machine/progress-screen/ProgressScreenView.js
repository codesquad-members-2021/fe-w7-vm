import './style.scss';
import { _ } from '../../util/util.js';
import MoneySumView from './MoneySumView.js';
import LogListView from './log/LogListView.js';

export default class ProgressScreenView {
  constructor({ model }) {
    this.$target;
    this.model = model;
    this.moneySumView;
    this.logListView;
    this.init();
  }

  init() {
    this.$target = this.createEl();
    this.moneySumView = new MoneySumView();
    this.logListView = new LogListView();
    this.render();

    this.model.subscribeEvent({ event: 'update-money-sum', callback: this.onUpdateMoneySum.bind(this) });
    this.model.subscribeEvent({ event: 'append-log', callback: this.onAppendLog.bind(this) });
  }

  onProductSelect(evt) {
    this.model.reduceMoney(evt.detail.price);
  }

  onUpdateMoneySum(evt) {
    this.moneySumView.updateSum(evt.detail.moneySum);
  }

  onAppendLog(evt) {
    this.logListView.appendLog(evt.detail.log);
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