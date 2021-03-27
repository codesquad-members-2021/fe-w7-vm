import './style.scss';
import { _ } from '../util/util.js';
import StringUtil from '../util/StringUtil.js';

export default class MoneySumView {
  constructor({ currency }) {
    this.$target;
    this.currency = currency;
    this.init();
  }

  init() {
    this.$target = this.createEl();
  }

  createEl() {
    return _.genEl('DIV', {
      classNames: ['money-sum'],
      template: StringUtil.getLocaleMoney({ money: 0, currency: this.currency }),
    });
  }

  updateSum(sum) {
    this.$target.textContent = StringUtil.getLocaleMoney({ money: sum, currency: this.currency });
  }

  getEl() {
    return this.$target;
  }
}