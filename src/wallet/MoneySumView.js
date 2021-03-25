import './style.scss';
import { _ } from '../util/util.js';

export default class MoneySumView {
  constructor() {
    this.$target;
    this.$sum;
    this.init();
  }

  init() {
    this.$target = this.createEl();
    this.$sum = _.$('.sum', this.$target);
  }

  createEl() {
    return _.genEl('DIV', {
      classNames: ['money-sum'],
      template: this.template({ sum : 0, currency: '원' }),
    });
  }

  updateSum(sum) {
    this.$sum.textContent = sum;
  }

  getEl() {
    return this.$target;
  }

  template({ sum, currency }) {
    return `<span class="sum">${sum}</span>
            <span class="currency">${currency}</span>`
  }
}