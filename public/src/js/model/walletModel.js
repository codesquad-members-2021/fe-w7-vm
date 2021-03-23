import Observable from '../observer';

class WalletModel extends Observable {
  constructor(myMoney) {
    super();
    this.walletMoney = myMoney;
  }
  getWalletMoney() {
    return this.walletMoney
  }
  setWalletMoney(money) {
    this.walletMoney = money;
  }
  notify(data) {
    this._observers.forEach((observer) => {
      observer();
    });
  }
}

export default WalletModel;