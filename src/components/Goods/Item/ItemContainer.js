import ItemPresentational from "./ItemPresentational.js";
import * as ITME_ENUM from "../../../util/enums/item.js";

import { useDispatch, useSelector } from "../../../util/store/useStore.js";
import { outItem } from "../../../util/actions/goods.js";

import "./item.scss";

// const STATUS = ["default", "isAbleToBuy", "isSoldOut"];

class ItemContainer {
  constructor({ $target, name, korean, amount }) {
    this.$target = $target;
    this.presentational = null;

    // state
    this.amount = null;
    this.name = name;
    this.korean = korean;
    this.status = ITME_ENUM.STATUS.default;
    
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
    const dispatch = useDispatch("goods");
    console.log("isSelected value", value);
    
    dispatch( outItem(value) )
    
  }

  render() {
    this.presentational = new ItemPresentational({
      $target: this.$target, 
      name: this.name,
      korean: this.korean,
      status: this.status,
      isSelected: this.isSelected.bind(this)
    });
  }
}

export default ItemContainer;