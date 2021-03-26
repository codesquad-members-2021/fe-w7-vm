import * as ITEM_ENUM from "../../../util/enums/item.js";

class ItemPresentational {
  constructor({ $target, korean, name, status, amount, isSelected }) {
    this.render($target, korean, name, status, amount, isSelected);
  }

  render($target, korean, name, status, amount, isSelected) {
    $target.innerHTML = ""; // 초기화

    const $item = document.createElement("div");
    $item.className = "item";
    
    let $itemContents;
    switch (status) {
      case ITEM_ENUM.STATUS.default:
        // $item.className += " is-able-to-buy"
        $itemContents = /* html */ `
          <span> ${korean}, ${amount} </span>
        `;
        break;
      case ITEM_ENUM.STATUS.isAbleToBuy:
        $item.className += " is-able-to-buy"
        $itemContents = /* html */ `
          <span> ${korean} 구매가능 </span>
        `;
        break;
      case ITEM_ENUM.STATUS.isSoldOut:
        $item.className += " is-sold-out"
        $itemContents = /* html */ `
          <span> ${korean} 품절 </span>
        `;
        break;
    }

    $item.insertAdjacentHTML("beforeend", $itemContents);

    $item.addEventListener("click", (e) => {
      isSelected(name)
    })

    $target.append($item);

  }
}

export default ItemPresentational;