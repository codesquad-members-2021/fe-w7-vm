import Observer from '../observer/observer';

export default class ProductModel extends Observer {
  constructor(order, price, imgUrl) {
    super();
    this.order = order;
    this.price = price;
    this.imgUrl = imgUrl;
    this.count = 10;
  }

  isNotEmpty() {
    return this.count > 0;
  }

  updateCount() {
    this.count--;
  }
}
