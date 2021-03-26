import { _ } from '../../util/const';
import { $, $$ } from '../../util/util';
import ProductListModel from '../models/productListModel';
import { productButtonObservers } from '../observer/observer';

export default class ProductView extends ProductListModel {
  constructor() {
    super();
    this.title = _.vendingMachineTitle;
  }

  async render() {
    await this.getOrderData();
    return `
      ${this.renderTitle()}
      ${this.renderOrderView()}
    `;
  }

  addEvent() {
    this.clickProductButton();
  }

  clickProductButton() {
    // $$('.order--button__container').addEventListener('click', () => productButtonObservers.fire());
    $$('.order--button__container').forEach((el) => {
      el.addEventListener('click', this.test.bind(this));
    });
  }

  test() {
    console.log('a');
  }

  renderTitle() {
    return `
      <div class="order--title">
        ${this.title}
      </div>
      `;
  }

  getOrderItem(order, price, imgUrl, count) {
    return `
    <div class="list-group-item order--button__box">
      <button type="button" class="btn btn-default order--button" data-count="${count}" data-price="${price}" disabled>
        <img src=${imgUrl} title="${order}" alt="${order}">
        <div class="order--price"><span>${price} ${_.money}</span></div>
      </button>
    </div>
    `;
  }

  renderOrderView() {
    const orderView = this.productList.reduce((acc, value) => {
      const { order, price, imgUrl, count } = value;
      acc += this.getOrderItem(order, price, imgUrl, count);
      return acc;
    }, ``);

    return `
    <div class="order--button__container">
      ${orderView}
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
