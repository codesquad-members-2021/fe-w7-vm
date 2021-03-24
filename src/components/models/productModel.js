export default class ProductModel {
  constructor(order, price) {
    this.order = order;
    this.price = price;
    this.count = 10;
  }

  isNotEmpty() {
    return this.count > 0;
  }

  updateCount() {
    this.isNotEmpty() && this.count--;
  }
}
