import { _ } from '../../util/const';
import { updateInputData } from '../../util/util';
import Observer from '../observer/observer';
import { $, $$ } from '../../util/util';

export default class OperationModel extends Observer {
  constructor() {
    super();
    this.insertMoney = 0;
    this.message = _.infoMessage;
    this.displayMoneySubscribe();
    this.returnMoneySubscribe();
  }

  displayMoneySubscribe() {
    this.subscribe(this.walletButtonObservers, this.plusDisplayMoney.bind(this));
    this.subscribe(this.walletButtonObservers, this.updateDisplayMoney.bind(this));
    this.subscribe(this.walletButtonObservers, this.changeStatePossible.bind(this));
  }

  returnMoneySubscribe() {
    this.subscribe(this.returnButtonObservers, this.currentMoney.bind(this));
    this.subscribe(this.returnButtonObservers, this.updateDisplayMoney.bind(this));
  }

  isEnough(insertMoney, price) {
    return insertMoney >= +price;
  }

  changeStatePossible() {
    const classList = $$(`.order--button`);
    classList.forEach((el) => {
      if (this.isEnough(this.insertMoney, el.dataset.price)) {
        el.classList.add('order--button--possible');
      }
    });
  }

  plusDisplayMoney(unit) {
    this.insertMoney += +unit;
  }

  updateDisplayMoney() {
    updateInputData(`insert--money__input`, this.insertMoney);
  }

  currentMoney() {
    const currentMoney = $(`insert--money__input`).value;
    console.log(currentMoney);
  }
}
