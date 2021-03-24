import { _ } from '../../util/const';
import FetchAPI from '../models/fetchAPI';
import ProductModel from '../models/productModel';

export default class OrderScreen {
  constructor() {
    this.title = _.vendingMachineTitle;
    this.buttonNumber = 20;
    this.fetchAPI = new FetchAPI();
    this.productList = [];
  }

  render() {
    this.getOrderData();
    return `
      ${this.renderTitle()}
      ${this.rederOrderScreen()}
    `;
  }

  renderTitle() {
    return `
      <div class="order--title">
        ${this.title}
      </div>
      `;
  }

  getOrderProduct(order, price) {
    return `
    <div class="list-group-item order--button__box">
      <button type="button" class="btn btn-default order--button">${order}</button>
      <div class="order--price"><span>${price} ${_.money}</span></div>
    </div>
    `;
  }

  getOrderData() {
    // const data = await this.data.fetchOrderData();
    const data = [
      { order: 1, price: 20 },
      { order: 2, price: 30 },
      { order: 3, price: 40 },
      { order: 4, price: 50 },
      { order: 5, price: 60 },
    ];
    this.productList = data.map((el) => {
      const product = new ProductModel(el.order, el.price);
      return product;
    });
  }

  rederOrderScreen() {
    const productListHTML = this.productList.reduce((acc, value) => {
      const [order, price] = [value.order, value.price];
      acc += this.getOrderProduct(order, price);
      return acc;
    }, ``);

    return `
    <div class="order--button__container">
      ${productListHTML}
    </div>
    `;
  }

  etc() {
    return `
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-danger">Danger</button>
  `;
  }
}
