import '../style.scss';
import { _ } from '../../../util/util.js';
import LogListItemView from './LogListItemView.js';

export default class LogListView {
  constructor() {
    this.$target;
    this.init();
  }

  init() {
    this.$target = this.createEl();
  }

  setLogs(logs) {
    _.clearChildren(this.$target);
    logs.forEach(log => this.appendLog(log) );
  }

  appendLog(log) {
    const li = new LogListItemView({ text: log });
    this.$target.appendChild(li.getEl());
  }

  createEl() {
    return _.genEl('UL', {
      classNames: ['log-list'],
    });
  };

  getEl() {
    return this.$target;
  }
}