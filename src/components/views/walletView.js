import { _ } from '../../util/const';
import { $, moneyComma } from '../../util/util';
import { observer } from '../observer/observer';
import WalletModel from '../models/walletModel';

export default class WalletView extends WalletModel {
  constructor() {
    super();
    this.title = _.walletTitle;
    this.subscribeInsertMoney();
  }

  subscribeInsertMoney() {
    observer.subscribe(observer.walletButtonObservers, this.minusMoney.bind(this));
    observer.subscribe(observer.walletButtonObservers, this.getExtraMoney.bind(this));
    observer.subscribe(observer.walletButtonObservers, this.updateWalletData.bind(this));
    observer.subscribe(observer.walletButtonObservers, this.updateWalletMoney.bind(this));
    observer.subscribe(observer.walletButtonObservers, this.toggleDisableButton.bind(this));
  }

  render() {
    return `
      ${this.renderTitle()}
      ${this.renderUnitMoneyButton()}
      ${this.renderWalletMoney()}
    `;
  }

  addEvent() {
    this.clickUnitMoneyButton();
  }

  clickUnitMoneyButton() {
    $('.wallet--button__container').addEventListener('click', (e) => observer.fire(observer.walletButtonObservers, e.target.id));
    // $('.wallet--button__container').addEventListener('click', (e) => this.display.fire(this.display.walletButtonObservers, e.target.id));
  }

  renderTitle() {
    return `
      <div class="wallet--title">
        ${this.title}
      </div>
      `;
  }

  getWalletMoney() {
    return `
    <form class="navbar-form wallet--money__form" role="search">
      <div class="form-group form-group-div">
        <input type="text" class="form-control wallet--money__input" placeholder="${_.money}" value="${moneyComma(this.wallet.walletMoney)} ${_.money}">
      </div>
    </form>
      `;
  }

  renderWalletMoney() {
    return `
    <div class="wallet__box">
      ${this.getWalletMoney()}
    </div>
      `;
  }

  getUnitMoneyButton({ unit, count }) {
    return `
    <div class="list-group-item wallet--button__box">
      <button type="button" class="btn btn-default wallet--button" id=${unit}>${moneyComma(unit)} ${_.money}</button>
      <div class="wallet--count"><span>${count} ${_.count}</span></div>
    </div>
    `;
  }

  renderUnitMoneyButton() {
    const buttonGroup = this.wallet.walletData.reduce((acc, cur) => {
      const button = this.getUnitMoneyButton(cur);
      acc += button;
      return acc;
    }, ``);

    return `
    <div class="wallet--button__container">
      ${buttonGroup}
    </div>
    `;
  }
}
