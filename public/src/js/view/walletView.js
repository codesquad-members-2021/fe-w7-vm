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
    this.walletArea = _.$('.wallet');
    this.init();
  }
  init() {
    this.render();
    this.addEvent();
  }
  addEvent() {
    this.walletArea.addEventListener('click', this.handleClick.bind(this))
  }

  handleClick({
    target
  }) {
    if (target === target.closest('.wallet__money-type')) {
      this.setWalletStatusMinus(target)
      this.render();
    }
  }

  setWalletStatusMinus(target) {
    const walletMoney = this.walletModel.getWalletMoney();
    walletMoney.forEach(el => {
      if (el.type === target.innerText.slice(0, -1) * 1) {
        el.count--;
      }
    })
    this.walletModel.setWalletMoney(walletMoney);
  }

  render() {
    this.renderWallet()
    this.setTotalMoney()
    this.renderTotalMoney();
  }

  setTotalMoney() {
    const walletMoney = this.walletModel.getWalletMoney();
    const totalMoney = walletMoney.reduce((acc, curr) =>
      acc + curr.type * curr.count, 0)
    this.totalMoney = totalMoney;
  }

  renderWallet() {
    const walletMoney = this.walletModel.getWalletMoney();
    const walletStatusTpl = walletMoney.reduce((acc, curr) =>
      acc + renderWalletTpl(curr.type, curr.count), ''
    )
    this.walletArea.innerHTML = walletStatusTpl;
  }

  renderTotalMoney() {
    const TotalMoneyTpl = totalWalletTpl(this.totalMoney);
    this.walletArea.innerHTML += TotalMoneyTpl;
  }




}

export default WalletView;