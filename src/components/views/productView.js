import { _ } from '../../util/const';
import { $, $$ } from '../../util/util';
import ProductListModel from '../models/productListModel';
import { productButtonObservers, returnButtonObservers, walletButtonObservers } from '../observer/observer';

export default class ProductView extends ProductListModel {
  constructor() {
    super();
    this.title = _.vendingMachineTitle;
    this.subscribeProductButton();
    this.subscribeProductCount();
    this.subscribeReturnMoney();
  }

  subscribeProductButton() {
    productButtonObservers.subscribe(this.changeCount.bind(this));
    productButtonObservers.subscribe(this.changeStateImpossible.bind(this));
    productButtonObservers.subscribe(this.renderLog.bind(this));
  }

  subscribeProductCount() {
    walletButtonObservers.subscribe(this.changeStatePossible.bind(this));
    walletButtonObservers.subscribe(this.changeStateImpossible.bind(this));
  }

  subscribeReturnMoney() {
    returnButtonObservers.subscribe(this.changeStateImpossible.bind(this));
  }

  addEvent() {
    this.clickProductButton();
  }

  clickProductButton() {
    $('.order--button__container').addEventListener('click', (e) => {
      productButtonObservers.fire(e.target.closest('.order--button'));
    });
  }

  async render() {
    await this.getOrderData();
    return `
      ${this.renderTitle()}
      ${this.renderOrderView()}
    `;
  }

  renderTitle() {
    return `
      <div class="order--title">
        ${this.title}
      </div>
      `;
  }

  getOrderItem(order, price, imgUrl, count, idx) {
    return `
    <div class="list-group-item order--button__box">
      <button type="button" id="${idx}" class="btn btn-default order--button" data-order="${order}" data-count="${count}" data-price="${price}" disabled>
        <img src=${imgUrl} title="${order}" alt="${order}">
        <div class="order--price"><span>${price} ${_.money}</span></div>
      </button>
    </div>
    `;
  }

  renderOrderView() {
    const orderView = this.productList.reduce((acc, value, idx) => {
      const { order, price, imgUrl, count } = value;
      acc += this.getOrderItem(order, price, imgUrl, count, idx);
      return acc;
    }, ``);

    return `
    <div class="order--button__container">
      ${orderView}
    </div>
    `;
  }

  // operation으로 가야하는데?...
  renderLog(productButton) {
    const value = this.getProductLog(productButton);
    const logBox = $('.log__box');
    if (value === undefined) return;
    const logData = `<input type="text" class="form-control operating--window" value="${value}" readonly>`;
    return logBox.insertAdjacentHTML('beforeend', logData);
  }
}
