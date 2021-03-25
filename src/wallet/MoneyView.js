import { _ } from '../util/util.js';

export default class MoneyView {
  constructor({ money, moneyCnt, currency }) {
    this.$target;
    this.$moneyKind;
    this.$moneyCnt;
    this.money = money;
    this.moneyCnt = moneyCnt;
    this.currency = currency;
    this.init();
  }

  init() {
    this.$target = this.createEl();
    this.$moneyKind = _.$('.money__kind', this.$target);
    this.$moneyCnt = _.$('.moeny__cnt', this.$target);
  }

  updateMoneyCnt({ moneyCnt }) {
    this.$moneyCnt.textContent = moneyCnt;
  }

  createEl() {
    return _.genEl('DIV', {
      classNames: ['money'],
      template: this.template({ money: this.money, currency: this.currency, moneyCnt: this.moneyCnt }),
      attributes: { 'data-money': this.money }
    })
  }

  getEl() {
    return this.$target;
  }

  template({ money, moneyCnt, currency }) {
    return `<div class="money__kind">
              <span>${money}</span>
              <span>${currency}</span>
            </div>
            <div class="money__cnt">${moneyCnt}</div>`
  }
}