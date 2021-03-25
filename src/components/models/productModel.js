import { addClassName, createRandomNumber } from '../../util/util';
import Observer from '../observer/observer';
import { $ } from '../../util/util';

export default class ProductModel extends Observer {
  constructor(order, price, imgUrl) {
    super();
    this.order = order;
    this.price = price;
    this.imgUrl = imgUrl;
    this.count = createRandomNumber(10);
  }

  changeStatePossible() {
    addClassName(`order--button`, `order--button--possible`);
  }

  updateCount() {
    this.count--;
  }
}
