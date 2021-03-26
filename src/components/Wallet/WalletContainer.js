import MoneyContainer from "./Money/MoneyContainer.js";
import "./wallet.scss";

import { useSelector, useSubscribe, useDispatch } from "../../util/store/useStore.js";
import { outMoney } from "../../util/actions/wallet.js";
import * as ACTION from "../../util/enums/action.js";

class WalletContainer {
  constructor({$target}) {
    this.$target = $target;
    this.subscribe = useSubscribe("wallet");
    this.dispatch = useDispatch("wallet");
    
    // components
    this.items = [];

    // state
    this.wallet = useSelector((state) => {
      return state.wallet.getState();
    });
    
    this.setState({});
    
    this.subscribe( ACTION.OUT_MONEY, (payload) => {
      this.setState({type: "amount", volume: payload});
    });
  }
  
  setState({ type, volume }) {
    switch (type) {
      case "amount":
        // console.log(this.items, volume)
        this.items.map((item) => {
          if (item.volume === String(volume)) {
            item.setState({type, value: this.wallet[volume].length})
          }
        });
      return;
    }
    this.render();
  }
  
  handleChangeWallet(money) {
    this.dispatch( outMoney(money) );
  }

  render() {
    const $moneySection = /* html */`
      <section class="wallet--section">
        <ul class="money-list">
        </ul>
      </section>
    `
    this.$target.insertAdjacentHTML("beforeend", $moneySection);
    const $moneyList = this.$target.querySelector("ul.money-list");

    for (const volume in this.wallet) {
      const $money = document.createElement("li");
      $money.className = "money-list-item";
      
      const money = new MoneyContainer({
        $target: $money,
        volume: volume, 
        amount: this.wallet[volume].length,
        handleChangeWallet: this.handleChangeWallet.bind(this)
      });

      this.items.push(money);
      $moneyList.append($money);
    }
  }
}

export default WalletContainer;