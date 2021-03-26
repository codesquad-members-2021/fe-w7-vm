import { $, createRandomNumber } from '../../util/util';

export default class ProductModel {
  constructor(order, price, imgUrl) {
    this.order = order;
    this.price = price;
    this.imgUrl = imgUrl;
    this.count = createRandomNumber(10);
  }

  changeStatePossible() {
    $(`.order--button`).classList.add(`order--button--possible`);
  }


}
