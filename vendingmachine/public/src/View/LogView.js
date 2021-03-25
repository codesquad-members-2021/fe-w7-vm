import _ from "../util.js";

export default class LogView {
  constructor(walletModel, productModel, parent) {
    this.walletModel = walletModel;
    this.productModel = productModel;
    this.parent = parent;
    this.InsertCoinDiv = _.$(".controller__total", parent);
    this.LogDiv = _.$(".controller__log", parent);
    this.init();
  }
  init() {
    this.onClickReset();
    this.walletModel.subscribe((data) => this.updateInsertCoinView(data[0]));
    this.walletModel.subscribe((data) => this.updatelogView(data[1]));
    //this.productModel.subscribe((data) => this.updatelogView(data[1]));
  }

  updateInsertCoinView(data) {
    this.InsertCoinDiv.innerHTML = `${data.total} 원`;
  }

  updatelogView(data) {
    this.LogDiv.innerHTML += this.LogViewTemplate(data);
  }

  LogViewTemplate(data) {
    let template;
    if (typeof data === "string")
      if (data === "reset") template = `<span>동전이 반환 되었습니다.</span>`;
      else template = `<span>${data}를 뽑으셨습니다.</span>`;
    else {
      template = `<span>${data.unit} 원을 넣었습니다.</span>`;
    }
    return template;
  }

  onClickReset() {
    _.on(_.$(".controller__reset"), "click", ({ target }) =>
      this.clickHandler(target)
    );
  }

  clickHandler() {
    this.walletModel.resetCoin();
  }
}
