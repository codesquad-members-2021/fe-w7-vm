import * as MONEY_ENUM from "../../../util/enums/money.js";

class MoneyPresentational {
  constructor({ $target, volume, status, amount, isSelected }) {
    this.render($target, volume, status, amount, isSelected);
  }

  render($target, volume, status, amount, isSelected) {
    $target.innerHTML = ""; // 초기화

    const $money = document.createElement("div");
    $money.className = "money";
    
    let $moneyContents;
    switch (status) {
      case MONEY_ENUM.STATUS.isNone:
        $money.className += " is-none"
        $moneyContents = /* html */ `
          <span> ${volume}, ${amount} </span>
        `;
        break;
      case MONEY_ENUM.STATUS.isAbleToUse:
        $money.className += " is-able-to-use"
        $moneyContents = /* html */ `
          <span> ${volume} ${amount} </span>
        `;
        break;
    }

    $money.insertAdjacentHTML("beforeend", $moneyContents);

    $money.addEventListener("click", (e) => {
      isSelected(volume)
    })

    $target.append($money);

  }
}

export default MoneyPresentational;