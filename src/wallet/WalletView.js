import { _ } from '../util/util.js';
import WalletModel from './WalletModel.js';
import MoneyView from './MoneyView.js';

export default class WalletView {
  constructor({ model }) {
    this.$target;
    this.$money;
    this.model = model;
    this.moneyViewMap = new Map();
    this.init();
  }

  init() {
    this.$target = this.createEl();
    this.$money = this.$target.firstElementChild;
    this.appendMoneyViews(this.model.getMoneyData());
    this.model.subscribeEvent({ event: 'use-money', callback: this.onUseMoney.bind(this) });
    this.$target.addEventListener('click', this.onClick.bind(this));
  }

  onClick({ target }) {
    if (!target instanceof MoneyView) return;

    this.model.useMoney({ money: target.dataset.money });
  }

  onUseMoney(evt) {
    this.moneyViewMap[evt.detail.money].updateMoneyCnt(evt.detail.moneyCnt);
  }

  appendMoneyViews(moneyData) {
    for (const [money, moneyCnt] of moneyData) {
      const moneyView = new MoneyView({ money, moneyCnt, currency: '원' });
      this.moneyViewMap.set(money, moneyView);
      this.$target.appendChild(moneyView.getEl());
    }
  }

  createEl() {
    return _.genEl('DIV', {
      classNames: ['wallet'],
    });
  }

  getEl() {
    return this.$target;
  }
}