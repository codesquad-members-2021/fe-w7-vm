import Observer from '../observer/observer';
import { getWalletMoney } from '../models/createWalletData';

export default class WalletModel extends Observer {
  constructor() {
    super();
    this.wallet = getWalletMoney();
    this.walletData = this.wallet.walletData;
    this.walletMoney = this.wallet.walletMoney;
  }
}
