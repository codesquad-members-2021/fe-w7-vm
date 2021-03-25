import { _, url, request } from "./utils.js";

export default class ProductView {
  constructor(walletModel, productModel, view) {
    this.walletModel = walletModel;
    this.productModel = productModel;
    this.view = view;
    this.productHtmls = null;
    this.init();
  }

  setView({ target }) {
    // debugger;
    if (!target) return;
    const currHtml = this.productHtmls[target.index];
    currHtml.classList.remove("active", "disable");
    currHtml.classList.add(target.status ? "active" : "disable");
  }

  updateProductState({ flag, insertedBalance }) {
    if (!flag || !insertedBalance) return;
    this.productModel.updateStatus(insertedBalance);
  }

  async init() {
    const data = await request(url.prod);
    this.productModel.setInitialData(data.product);
    this.setInitialView();
    this.buyProduct();
    this.productModel.subscribe(this.setView.bind(this));
    this.walletModel.subscribe(this.updateProductState.bind(this));
  }

  setInitialView() {
    const template = (item) => {
      return /*html*/ `
        <div class="item ${item.status ? "active" : "disable"}">
          <div class="item__name">${item.name}</div>
          <div class="item__price">${item.price}</div>
        </div>
          `;
    };
    this.view.innerHTML = this.productModel.productList.reduce((acc, item) => acc + template(item), `<div class="items">`) + `</div>`;
    this.productHtmls = _.$$(".item", this.view);
  }

  buyProduct() {
    this.view.addEventListener("click", ({ target }) => {
      console.log(target);
      const itemBox = target.closest(".item");
      console.log(itemBox);
      const sameProduct = this.productModel.productList.find((item) => item.name === itemBox.firstElementChild.innerText);
      console.log(sameProduct);
      if (!sameProduct) return;
      this.walletModel.updateInsertedBalance(-1 * sameProduct.price);
      // 여기서 처리하지 않거나

      this.productModel.updateCount(sameProduct);
    });
  }
}
