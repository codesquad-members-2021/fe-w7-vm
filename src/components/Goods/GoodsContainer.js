import ItemContainer from "./Item/ItemContainer.js";
import { useSelector } from "../../util/store/useStore.js";

class GoodsContainer {
  constructor({$target}) {
    this.$target = $target;
    this.items = [];

    // state
    this.goods = useSelector((state) => state.goods.getState());
    
    this.setState();
  }
  
  setState() {
    this.render();
  }

  render() {
    const $goods = document.createElement("ul");
    $goods.className = "goods"

    for (const name in this.goods) {
      const $good = document.createElement("li");
      const item = new ItemContainer({
        $target: $good,
        name: name, 
        korean: this.goods[name][0].korean,
        amount: this.goods[name].length,
      });
      
      this.items.push(item);
      $goods.append($good);
    }

    this.$target.append($goods); 
  }
}

export default GoodsContainer;