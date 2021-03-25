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

  updateCount(target) {
    // 상품이 구매되었을 때
    this.notify(target);
    return target.count--;
  }

  setInitialData(data) {
    this.productList = data.map((e, i) => new Product(e, i));
  }

  updateStatus(balance) {
    this.productList.forEach((target) => {
      if (target.status && (target.price > balance || !target.count)) {
        target.status = 0;
        this.notify({ target });
      } else if (!target.status && target.price <= balance && target.count > 0) {
        target.status = 1;
        this.notify({ target });
      }
    });
  }
}
