import { mainView } from '../../app';
import { _ } from '../../util/const';
import { $$ } from '../../util/util';
import { changeSoldOutColor, createRandomNumber, isEmpty } from '../../util/util';
import FetchProductData from '../getData/fetchProductData';
import ProductModel from './productModel';

export default class ProductListModel extends ProductModel {
  constructor() {
    super();
    this.fetchProductData = new FetchProductData();
    this.productList = [];
  }

  changeCount(productButton) {
    if (productButton === null) return;
    const id = productButton.id;
    this.productList[id].count;
    console.log(this.productList[id].count);
    if (isEmpty(this.productList[id].count)) return changeSoldOutColor(productButton);
    this.productList[id].count--;
  }

  isEnough(insertMoney, price) {
    return insertMoney >= +price;
  }

  changeStatePossible() {
    const classList = $$(`.order--button`);
    classList.forEach((el, idx) => {
      if (this.isEnough(mainView.operationView.insertMoney, this.productList[idx].price)) {
        el.classList.add('order--button--possible');
        el.disabled = false;
      }
    });
  }

  changeStateImpossible() {
    const classList = $$(`.order--button`);
    classList.forEach((el, idx) => {
      if (!this.isEnough(mainView.operationView.insertMoney, this.productList[idx].price) || isEmpty(this.productList[idx].count)) {
        el.classList.remove('order--button--possible');
        el.disabled = true;
      }
    });
  }

  async getOrderData() {
    const response = await this.fetchProductData.fetchProductData();
    const dataList = response.data;
    const dataListKeys = Object.keys(response.data);

    const emptyDataList = Array(_.productItemCount).fill();
    const orderDataList = emptyDataList.map(() => {
      const randomIdx = createRandomNumber(dataListKeys.length);
      const itemKey = dataListKeys[randomIdx];
      const item = dataList[itemKey];
      return {
        order: item.name,
        price: item.gold.base,
        imgUrl: `https://ddragon.leagueoflegends.com/cdn/11.6.1/img/item/${itemKey}.png`,
      };
    });
    this.productList = orderDataList.map(({ order, price, imgUrl }) => {
      const product = new ProductModel(order, price, imgUrl);
      return product;
    });
  }
}
