import { _ } from '../../util/const';
import { isEnough, updateInputData } from '../../util/util';
import { $$ } from '../../util/util';

export default class OperationModel {
  constructor() {
    this.insertMoney = 0;
    this.message = _.infoMessage;
  }

  getInsertMoney() {
    return this.insertMoney;
  }

  plusDisplayMoney(unit) {
    if (unit === '') return;
    this.insertMoney += +unit;
  }

  minusDisplayMoney(unit) {
    if (unit === null) return;
    const price = unit.dataset.price;
    return (this.insertMoney -= +price);
  }

  updateDisplayMoney() {
    updateInputData(`insert--money__input`, this.insertMoney);
  }

  initCurrentMoney() {
    this.insertMoney = 0;
  }

  calculateReturnMoney() {
    let returnMoney = +this.insertMoney;
    const returnMoneyData = _.walletMoneyList.map((el) => {
      const moneyData = {
        unit: 0,
        count: 0,
      };
      if (returnMoney >= el) {
        moneyData.unit = el;
        moneyData.count = parseInt(returnMoney / el);
        returnMoney %= el;
      } else {
        moneyData.unit = el;
        moneyData.count = parseInt(returnMoney / el);
      }
      return moneyData;
    });
    this.initCurrentMoney();
    return returnMoneyData;
  }
}
