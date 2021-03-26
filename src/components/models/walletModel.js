import { _ } from '../../util/const';
import { $$, updateInputData } from '../../util/util';
import { createWalletData } from '../getData/createWalletData';

export default class WalletModel {
  constructor() {
    this.wallet = createWalletData();
    this.walletData = this.wallet.walletData;
    this.walletMoney = this.wallet.walletMoney;
  }

  updateWalletData() {
    const walletButtonContainer = $$('.wallet--button__box');
    walletButtonContainer.forEach((el, idx) => {
      el.querySelector('.wallet--count > span').innerText = `${this.walletData[idx].count} ${_.count}`;
    });
  }

  updateWalletMoney() {
    updateInputData(`wallet--money__input`, this.walletMoney);
  }

  minusMoney(unit) {
    for (const key in this.walletData) {
      if (this.walletData[key].unit === +unit) {
        this.walletData[key].count--;
      }
    }
  }

  plusMoney(data) {
    console.log(data);
  }

  getExtraMoney(unit) {
    this.walletMoney -= +unit;
  }

  checkUnitMoneyCount(idx) {
    return this.walletData[idx].count === 0;
  }

  toggleDisableButton() {
    const walletButtonContainer = $$('.wallet--button__box');
    walletButtonContainer.forEach((el, idx) => {
      if (this.checkUnitMoneyCount(idx)) {
        el.querySelector('.wallet--button').disabled = true;
        this.toggleColorDiasbleButton(el, `wallet--count`, `wallet--count--disabled`);
      }
    });
  }

  toggleColorDiasbleButton(element, className, addClassName) {
    element.querySelector(`.${className}`).classList.add(addClassName);
  }
}
