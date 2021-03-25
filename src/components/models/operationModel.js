import { _ } from '../../util/const';
import { updateInputData } from '../../util/util';
import Observer from '../observer/observer';
import { $$ } from '../../util/util';

export default class OperationModel extends Observer {
  constructor() {
    super();
    this.insertMoney = 0;
    this.message = _.infoMessage;
    this.displayMoneySubscribe();
  }

  displayMoneySubscribe() {
    this.subscribe(this.plusDisplayMoney.bind(this));
    this.subscribe(this.updateDisplayMoney.bind(this));
    this.subscribe(this.changeStatePossible.bind(this));
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
}
