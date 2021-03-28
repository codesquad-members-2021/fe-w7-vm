import { _ } from '../../util/const';
import { updateInputData } from '../../util/util';
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
    this.insertMoney += +unit;
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
