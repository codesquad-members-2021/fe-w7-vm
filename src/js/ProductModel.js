import Observable from "./Observable.js";
import Product from "./Product.js";

export default class ProductModel extends Observable {
  constructor() {
    super();
    this.productList = null;
  }

  getPrice(index) {
    return this.productList[index].price;
  }

  updateCount(index) {
    return this.productList[index].count--;
  }

  setInitialData(data) {
    this.productList = data.map((e, i) => new Product(e, i));
  }

  updateStatus(balance) {
    this.productList.forEach((item) => {
      if (item.status && (item.price > balance || !item.count)) {
        item.status = 0;
        this.notify(item);
      }
      if (!item.status && item.price <= balance && item.count > 0) {
        item.status = 1;
        this.notify(item);
      }
    });
  }
}
