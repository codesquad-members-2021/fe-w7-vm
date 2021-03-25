import Observer from '../observer/observer';
import { createWalletData } from '../models/createWalletData';

export default class WalletModel extends Observer {
  constructor() {
    super();
    this.wallet = createWalletData();
    this.walletData = this.wallet.walletData;
    this.walletMoney = this.wallet.walletMoney;
    console.log(this.walletData);
    console.log(this.walletMoney);
  }
}
