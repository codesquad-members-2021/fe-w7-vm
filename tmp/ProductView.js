import { request, url, _ } from "./utils.js";
import Product from "./Product.js";

export default class ProductView {
  constructor(view, manager) {
    this.manager = manager;
    this.manager.subscribe(this.clickProducts.bind);
    this.products = null;
    this.view = view;
  }

  async init() {
    const data = await this.getProducts();
    this.products = data.map((e) => new Product(e));
    this.render();
    this.clickProducts();
  }

  async getProducts() {
    const data = await request(url.prod);
    return data.product;
  }

  render() {
    const template = (item) => {
      return /*html*/ `
            <div class="item">
              <div class="item__name">${item.name}</div>
              <div class="item__price">${item.price}</div>
            </div>
              `;
    };
    this.view.innerHTML = this.products.reduce((acc, item) => acc + template(item), `<div class="items">`) + `</div>`;
    const products = _.$$(".item", this.view);
    this.products.forEach((e, i) => {
      e.setSelf(products[i]);
    });
  }

  clickProducts() {
    // 매니저에게 알림
    if (!this.view) return;
    this.view.addEventListener("click", ({ target }) => {
      const itemBox = target.closest(".item");
      const sameProduct = this.products.find((item) => item.self === itemBox);
      if (!sameProduct) return;
      //   this.manager.buyProduct(sameProduct);
      this.manager.notify(sameProduct);
    });
  }

  activeProducts(value) {
    this.products.forEach((item) => {
      const self = item.self;
      item.self.classList.remove("active", "disable");
      if (item.price <= value && item.count > 0) self.classList.add("active");
      else self.classList.add("disable");
    });
  }

  // setProductCount(target, value) {}
}
