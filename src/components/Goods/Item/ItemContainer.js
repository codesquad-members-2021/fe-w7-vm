import ItemPresentational from "./ItemPresentational.js";
import * as ITME_ENUM from "../../../util/enums/item.js";

import "./item.scss";

class ItemContainer {
  constructor({ $target, name, korean, amount, handleChangeGoods }) {
    this.$target = $target;
    this.presentational = null;

    // state
    this.amount = null;
    this.name = name;
    this.korean = korean;
    this.status = ITME_ENUM.STATUS.default;
    
    this.onChangeGoods = handleChangeGoods;
    
    this.setState({ type: "amount", value: amount });

  }

  setState({type, value}) {
    switch(type) {
      case "amount":
        this.amount = value;
        if (value === 0) this.status = ITME_ENUM.STATUS.isSoldOut;
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
  
  isAbleToBuy() {
    this.setState({ type: "status", value: ITME_ENUM.STATUS.isAbleToBuy });
  }


  isSelected(value) {
    if (this.amount !== 0) 
      this.onChangeGoods(value)
    else
      alert("품절")
  }

  render() {
    this.$target.innerHTML = "";
    
    this.presentational = new ItemPresentational({
      $target: this.$target, 
      name: this.name,
      korean: this.korean,
      status: this.status,
      amount: this.amount,
      isSelected: this.isSelected.bind(this)
    });
  }
}

export default ItemContainer;