import './style.scss';
import { _ } from '../util/util.js';
import MoneyView from './MoneyView.js';
import MoneySumView from './MoneySumView.js';

export default class WalletView {
  constructor({ model }) {
    this.$target;
    this.$money;
    this.model = model;
    this.moneyViewMap = new Map();
    this.moneySumView;
    this.init();
  }

  init() {
    this.$target = this.createEl();
    this.$money = this.$target.firstElementChild;
    this.appendMoneyViews({ moneyData: this.model.getMoneyData(), currency: this.model.getCurrency() });
    this.appendMoneySumView({ moneyData: this.model.getMoneyData(), currency: this.model.getCurrency() });

    this.model.subscribeEvent({ event: 'use-money', callback: this.onUseMoney.bind(this) });
    this.$target.addEventListener('click', this.onClick.bind(this));
  }

  onClick({ target }) {
    if (!target.disabled && target.classList.contains('money'))
      this.model.useMoney({ money: target.dataset.money });
  }

  onUseMoney(evt) {
    this.moneyViewMap.get(evt.detail.money).updateMoneyCnt(evt.detail.moneyCnt);
    this.moneySumView.updateSum(this.calculateMoneySum(this.model.getMoneyData()));
  }

  onReturnMoney(evt) {
    //TODO
  }

  appendMoneyViews({ moneyData, currency }) {
    for (const [money, moneyCnt] of moneyData) {
      const moneyView = new MoneyView({ money, moneyCnt, currency });
      this.moneyViewMap.set(money, moneyView);
      this.$target.appendChild(moneyView.getEl());
    }
  }

  appendMoneySumView({ moneyData, currency }) {
    this.moneySumView = new MoneySumView({ currency: currency });
    this.moneySumView.updateSum(this.calculateMoneySum(moneyData));
    this.$target.appendChild(this.moneySumView.getEl());
  }

  calculateMoneySum(moneyData) {
    return moneyData.reduce((result, data) => {
      const [money, moneyCnt] = data;
      return result +  money * moneyCnt;
    }, 0);
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