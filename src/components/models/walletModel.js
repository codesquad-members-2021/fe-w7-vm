import Observer from '../observer/observer';
import { createWalletData } from '../models/createWalletData';

export default class WalletModel extends Observer {
  constructor() {
    super();
    this.wallet = createWalletData();
    this.walletData = this.wallet.walletData;
    this.walletMoney = this.wallet.walletMoney;
    this.insertMoneySubscribe();
  }

  insertMoneySubscribe() {
    this.subscribe(this.minusMoney.bind(this));
    this.subscribe(this.getExtraMoney.bind(this));
  }

  minusMoney(unit) {
    for (const key in this.walletData) {
      if (this.walletData[key].unit === +unit) {
        this.walletData[key].count--;
      }
    }
  }

  plusMoney() {
    // 반환되는 잔돈을 unit별로 나눠서 더해주고
    // 지갑 잔돈을 구해주기
  }

  getExtraMoney(unit) {
    this.walletMoney -= +unit;
  }
}
