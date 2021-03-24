import { _ } from '../../util/const';
import { createRandomNumber } from '../../util/util';
import FetchAPI from '../models/fetchAPI';
import ProductModel from '../models/productModel';

export default class OrderView {
  constructor() {
    this.title = _.vendingMachineTitle;
    this.fetchAPI = new FetchAPI();
    this.productList = [];
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

  getOrderItem(order, price) {
    return `
    <div class="list-group-item order--button__box">
      <button type="button" class="btn btn-default order--button">${order}</button>
      <div class="order--price"><span>${price} ${_.money}</span></div>
    </div>
    `;
  }

  async getOrderData() {
    const response = await this.fetchAPI.fetchOrderData();
    const dataList = response.data;
    const dataListKeys = Object.keys(response.data);

    const emptyDataList = Array(_.productItemCount).fill();
    const orderDataList = emptyDataList.map((el) => {
      const randomIdx = createRandomNumber(dataListKeys.length);
      const itemKey = dataListKeys[randomIdx];
      const item = dataList[itemKey];
      return {
        order: item.name,
        price: item.gold.base,
      };
    });

    this.productList = orderDataList.map((el) => {
      const product = new ProductModel(el.order, el.price);
      return product;
    });
  }

  renderOrderView() {
    const orderView = this.productList.reduce((acc, value) => {
      const [order, price] = [value.order, value.price];
      acc += this.getOrderItem(order, price);
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
