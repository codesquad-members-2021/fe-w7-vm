import './style.scss';
import { _ } from '../../util.js';
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

  // onEvents() {
    // this.model.addEventListener('update-sum', this.onUpdateSum.bind(this));
    // this.model.addEventListener('update-logs', this.onUpdateLogs.bind(this));
  // }

  onUpdateSum({ evt }) {
    this.moneySumView.setSum(evt.detail.sum);
  }

  onUpdateLogs() {
    this.logListView.set
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