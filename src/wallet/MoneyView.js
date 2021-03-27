import { _ } from '../util/util.js';
import StringUtil from '../util/StringUtil.js';

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
    this.$moneyCnt = _.$('.money__cnt', this.$target);
    this.initStyle();
  }

  initStyle() {
    if (this.currency === 'KRW') {
      switch (this.money) {
        case 100:
          this.$moneyKind.classList.add('krw-100');
          break;
        case 500:
          this.$moneyKind.classList.add('krw-500');
          break;
        case 1000:
          this.$moneyKind.classList.add('krw-1000');
          break;
        case 5000:
          this.$moneyKind.classList.add('krw-5000');
          break;
        case 10000:
          this.$moneyKind.classList.add('krw-10000');
          break;
        case 50000:
          this.$moneyKind.classList.add('krw-50000');
          break;
      }
    }
  }

  disable() {
    this.$target.classList.add('disable');
  }

  enable() {
    this.$target.classList.remove('disable');
  }

  updateMoneyCnt(moneyCnt) {
    this.$moneyCnt.textContent = moneyCnt;

    if (moneyCnt === 0) this.disable();
    else this.enable();
  }

  createEl() {
    return _.genEl('DIV', {
      classNames: ['money'],
      template: this.template({ localeMoney: StringUtil.getLocaleMoney({ money: this.money, currency: this.currency }), moneyCnt: this.moneyCnt }),
      attributes: { 'data-money': this.money }
    })
  }

  getEl() {
    return this.$target;
  }

  template({ localeMoney, moneyCnt }) {
    return `<div class="money__kind">${localeMoney}</div>
            <div class="money__cnt">${moneyCnt}</div>`
  }
}