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

  // insertedBalance 변할 때
  // 상품을 클릭하면 insertedBalance 변화, 현황판에 "콜라"를 구매했다

  setViewAboutWallet({ flag, type, insertedCurrency }) {
    // 상품 클릭했을 때
    // insertedBalance가 변했을 때
    if (!flag || type === 'buy') return;
    this.insertedBalanceHtml.value = `${this.walletModel.insertedBalance}원`;
    this.printMessage(type, insertedCurrency);
  }

  setViewAboutProduct({flag, type, target}) {
    if(flag || !type || type !== 'buy') return;
    this.insertedBalanceHtml.value = `${this.walletModel.insertedBalance}원`;
    this.printMessage(type, target);
  }

  init() {
    this.setInitialView();
    this.returnInsertedBalance();
    this.walletModel.subscribe(this.setViewAboutWallet.bind(this)); // <- walletModel : flag, insertedBalance
    this.productModel.subscribe(this.setViewAboutProduct.bind(this));
    
    // this.productModel.subscribe(this.buyView.bind(this)) // <- productModel : item:target:product 를 받아서 그 이름을 갖고 printMessage 수행
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
      if (type === "insert") return `<p class="board__message">${target}원을 입금하였습니다.</p>`;
      if (type === "return") return `<p class="board__message">${-1 * target}원을 반환하였습니다.</p>`;
    };
    if(type === 'insert' && target < 0) return;
    this.statusBoard.insertAdjacentHTML("beforeend", setMsg(target));
  }

  returnInsertedBalance() {
    // 자판기 잔액 반환 이벤트
    // 지갑에 돈 추가
    // 자판기 잔액은 0원
    // 프린트
    this.returnButton.addEventListener("click", () => this.walletModel.returnBalance());
  }
}
