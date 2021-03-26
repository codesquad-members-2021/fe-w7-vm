import MoneyPresentational from "./MoneyPresentational.js";
import * as MONEY_ENUM from "../../../util/enums/money.js";

import "./money.scss";

class MoneyContainer {
  
  constructor({ $target, volume, amount, handleChangeWallet }) {
    this.$target = $target;
    this.presentational = null;

    // state
    this.amount = null;
    this.volume = volume;

    this.status = MONEY_ENUM.STATUS.isAbleToUse;
    
    this.onChangeWallet = handleChangeWallet;
    
    this.setState({ type: "amount", value: amount });

  }

  setState({type, value}) {
    switch(type) {
      case "amount":
        this.amount = value;
        if (value === 0) this.status = MONEY_ENUM.STATUS.isNone;
        break;
      case "status":
        this.status = value;
        break;
      default:
        console.error(type, value);
        break;
    }
    this.render();
  }
  
  isAbleToUse() {
    this.setState({ type: "status", value: ITME_ENUM.STATUS.isAbleToUse });
  }


  isSelected(value) {
    if (this.amount !== 0) 
      this.onChangeWallet(value)
    else
      alert("쓸 수 있는 돈이 없다. 텅비어버린 나의 마음과 같구나.")
  }

  render() {
    this.$target.innerHTML = "";
    
    this.presentational = new MoneyPresentational({
      $target: this.$target, 
      volume: this.volume,
      status: this.status,
      amount: this.amount,
      isSelected: this.isSelected.bind(this)
    });
  }
}

export default MoneyContainer;