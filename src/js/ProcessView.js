import Observable from "./Observable";
import { _ } from "./utils.js";

export default class ProcessView extends Observable {
  constructor(walletModel, productModel, view) {
    super();
    this.walletModel = walletModel;
    this.productModel = productModel;
    this.insertedBalanceHtml = null;
    this.returnButton = null;
    this.statusBoard = null;
    this.view = view;
    this.init();
  }

  setView({ target }) {
    // 자판기 잔액에 반영
    // 현황판
    this.walletModel.updateInsertBalance(target.value);
    this.insertedBalanceHtml.value = `${this.walletModel.insertedBalance}원`;
    this.printMessage("insert", target);
  }

  init() {
    this.setInitialView();
    this.walletModel.subscribe(this.setView.bind(this));
  }

  setInitialView() {
    const template = (value) => {
      return /*html*/ `
          <input class="inputBalance" value="${value}원" readonly>
          <button class="returnButton">반환</button>
          <div class="statusBoard"></div>
        `;
    };
    this.view.innerHTML = template(this.walletModel.insertedBalance);
    this.returnButton = _.$(".returnButton", this.view);
    this.statusBoard = _.$(".statusBoard", this.view);
    this.insertedBalanceHtml = _.$(".inputBalance", this.view);
  }

  printMessage(type, target) {
    const setMsg = (target) => {
      if (type === "buy") return `<p class="board__message">${target.name}(을/를) 구매하였습니다.</p>`;
      if (type === "insert") return `<p class="board__message">${target.value}원을 입금하였습니다.</p>`;
      if (type === "return") return `<p class="board__message">${this.walletModel.insertedBalance}원을 반환하였습니다.</p>`;
    };
    this.statusBoard.insertAdjacentHTML("beforeend", setMsg(target));
  }
}
