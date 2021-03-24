import { _, url, request } from "./utils.js";

export default class ProductView {
  constructor(walletModel, productModel, view) {
    this.walletModel = walletModel;
    this.productModel = productModel;
    this.view = view;
    this.productHtmls = null;
    this.init();
  }

  setView(target) {
    const currHtml = this.productHtmls[target.index];
    currHtml.classList.remove("active", "disable");
    currHtml.classList.add(target.status ? "active" : "disable");
  }

  async init() {
    const data = await request(url.prod);
    this.productModel.setInitialData(data.product);
    this.setInitialView();
    this.buyProduct();
    this.productModel.subscribe(this.setView.bind(this));
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
      const itemBox = target.closest(".item");
      const sameProduct = this.products.productList.find((item) => item.self === itemBox);
      if (!sameProduct) return;
      this.walletModel.updateInsertBalance(-1 * sameProduct.price);
      this.productModel.updateStatus(this.walletModel.insertedBalance);
    });
  }
}
