import _ from "../util.js";

export default class LogView {
  constructor(walletModel, productModel, parent) {
    this.walletModel = walletModel;
    this.productModel = productModel;
    this.parent = parent;
    this.InsertCoinDiv = _.$(".controller__total", parent);
    this.LogDiv = _.$(".controller__log", parent);
    this.timer;
    this.init();
  }
  init() {
    this.onClickReset();
    this.walletModel.subscribe((data) => this.updateInsertCoinView(data[0]));
    this.walletModel.subscribe((data) => this.updatelogView(data[1]));
  }

  updateInsertCoinView(data) {
    this.InsertCoinDiv.innerHTML = `${data.total} 원`;
  }

  updatelogView(data) {
    this.LogViewTemplate(data)
      .then((data) => (this.LogDiv.innerHTML += data))
      .then((this.LogDiv.scrollTop = this.LogDiv.scrollHeight));
    if (data !== "reset") {
      this.resetTimer(data);
    } else {
      this.resetTimer(data);
    }
  }

  async LogViewTemplate(data) {
    if (typeof data[0] !== "string")
      return `<span>${data.unit} 원을 넣었습니다.</span>`;
    if (data === "reset") return `<span>동전이 반환 되었습니다.</span>`;
    else {
      this.returnSelectedProduct(data);
      await _.delay(2000);
      return `<span>${data[0]}를 뽑으셨습니다.</span>`;
    }
  }

  returnSelectedProduct(data) {
    this.LogDiv.innerHTML += `<span>${data[0]}를 선택하셨습니다(재고: ${data[1]}개)</span>`;
  }

  onClickReset() {
    _.on(_.$(".controller__reset"), "click", ({ target }) =>
      this.clickHandler(target)
    );
  }

  clickHandler() {
    this.walletModel.resetCoin();
  }

  resetTimer(status) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (status === "reset") clearTimeout(this.timer);
      else this.walletModel.resetCoin();
    }, 5000);
  }
}
