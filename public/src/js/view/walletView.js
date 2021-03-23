import {
  _
} from '../utill.js'
import {
  renderWalletTpl,
  totalWalletTpl
} from '../HtmlTemplate.js'

class WalletView {
  constructor(walletModel) {
    this.walletModel = walletModel;
    this.totalMoney;
    this.first = document.querySelector('#first');


    this.init();
    console.log(this.first);
  }
  init() {
    this.renderWallet()
    this.renderTotalMoney();

    //this.walletModel.subscribe(this.sayWallet.bind(this));
    //this.first.addEventListener('click', this.walletModel.notify.bind(this.walletModel));
  }

  setTotalMoney() {
    const walletMoney = this.walletModel.getWalletMoney();
    const totalMoney = walletMoney.reduce((acc, curr) =>
      acc + curr.type * curr.count, 0)
    this.totalMoney = totalMoney;
  }

  renderTotalMoney() {
    this.setTotalMoney()
    const TotalMoneyTpl = totalWalletTpl(this.totalMoney);
    const walletArea = _.$('.wallet');
    walletArea.insertAdjacentHTML('beforeEnd', TotalMoneyTpl);
  }

  renderWallet() {
    const walletArea = _.$('.wallet');
    const walletMoney = this.walletModel.getWalletMoney();
    const walletStatusTpl = walletMoney.reduce((acc, curr) =>
      acc + renderWalletTpl(curr.type, curr.count), ''
    )
    walletArea.insertAdjacentHTML('afterBegin', walletStatusTpl);
  }

  sayWallet() {
    this.setTotalMoney();
    this.renderWallet();
    console.log('wallet');
  }
}

export default WalletView;