import WalletContainer from "./components/Wallet/WalletContainer.js";
import GoodsContainer from "./components/Goods/GoodsContainer.js";
import ProcessContainer from "./components/process/processContainer.js";

import store from "./util/store/root.js";
import { useStore, useDispatch, useSelector } from "./util/store/useStore.js";

import { Coke, Cider, PineappleFanta, GrapeFanta, LemonAde, BonBon, CocoaJuice, CokeZero, PowerAde, ChocoMilk1, ChocoMilk2, ChocoMilk3 } from "./util/objects/goods.js";
import { addItem, outItem } from "./util/actions/goods.js";
import { addMoney, outMoney } from "./util/actions/wallet.js";

class App {
  constructor({ $target }) {
    this.$target = $target;

    // components
    this.wallet = null;
    this.goods = null;
    this.process = null;

    this.store = store;
    useStore(store); // store initialize

    this.init()

    this.setState({});
  }
  init() {

    let dispatch = useDispatch("goods");
    const goodsState = useSelector((state) => state.goods);

    // goods 추가 과정
    const beverages = [Coke, Cider, PineappleFanta, GrapeFanta, LemonAde, BonBon, CocoaJuice, CokeZero, PowerAde, ChocoMilk1, ChocoMilk2, ChocoMilk3];
    beverages.forEach((item) => {
      [...Array(10).keys()].forEach((_) => {
        const beverage = new item();
        const payload = { [beverage.name]: beverage }
        dispatch(addItem(payload));
      })
    })

    // wallet 추가 과정
    dispatch = useDispatch("wallet");
    const moneys = [10, 50, 100, 500, 1000, 5000, 10000];
    moneys.forEach((item) => {
      [...Array(10).keys()].forEach((_) => {
        const payload = { [item]: item }
        dispatch(addMoney(payload));
      })
    })
    const walletState = useSelector((state) => state.wallet);
  }

  setState() {
    this.render();
  }

  handleChangeWallet({ method, value }) {

    const state = {
      type: "wallet",
      method: method,
      value: value
    };
    this.setState(state);
  }

  render() {
    this.wallet = new WalletContainer({
      $target: this.$target,
      handleChangeWallet: this.handleChangeWallet.bind(this),
    });

    this.goods = new GoodsContainer({ $target: this.$target });

    this.process = new ProcessContainer({ $target: this.$target })
  }
}

export default App;