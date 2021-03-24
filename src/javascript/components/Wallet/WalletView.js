import Component from '../../core/Component.js';
import Wallet from './Wallet.js';
import Total from './Total.js';

export default class WalletView extends Component {
  selectPropsToUse() {
    const { moneylist, payMoney, changeMoney, totalMoney } = this.props;
    this.selfProps = { moneylist, payMoney, changeMoney, totalMoney };
  }
  getTemplate() {
    return `
     <ul class="wallet_line"></ul>
     <div class="wallet_total"></div>
    `;
  }
  mountComponents() {
    const { moneylist } = this.selfProps;
    moneylist.forEach((el) => {
      this.createComponent(
        Wallet,
        '.wallet_line',
        () => {
          const { title, count } = el;
          return { title, count };
        },
        'li'
      );
    });
    this.createComponent(Total, '.wallet_total', () => {
      const { totalMoney } = this.props;
      const totalmoney = totalMoney();
      return { totalmoney };
    });
  }

  setEventLinstener() {
    const { payMoney, changeMoney } = this.selfProps;
    this.addEventLinstener('click', '.coin', ({ target }) => {
      const type = target.innerText.replace(/[^0-9]/g, '');
      payMoney(type);
      changeMoney(type);
    });
  }
}
