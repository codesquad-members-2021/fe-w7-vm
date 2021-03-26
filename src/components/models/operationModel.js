import { _ } from '../../util/const';
import { updateInputData } from '../../util/util';
import { $$ } from '../../util/util';

export default class OperationModel {
  constructor() {
    this.insertMoney = 0;
    this.message = _.infoMessage;
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

  initCurrentMoney() {
    this.insertMoney = 0;
  }

  calculateReturnMoney() {
    const unitMoneyList = _.walletMoneyList.reverse();
    const returnMoneyData = {};
    let returnMoney = +this.insertMoney;
    unitMoneyList.forEach((el) => {
      debugger;
      if (returnMoney >= el) {
        returnMoneyData[el] = parseInt(returnMoney / el);
        returnMoney %= el;
        debugger;
      }
    });
    console.log(returnMoneyData);
    return returnMoneyData;
  }
}
