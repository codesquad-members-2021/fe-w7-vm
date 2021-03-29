import { _ } from '../../util/const';
import { $ } from '../../util/util';
import OperationModel from '../models/operationModel';
import { productButtonObservers, returnButtonObservers, walletButtonObservers } from '../observer/observer';

export default class OperationView extends OperationModel {
  constructor() {
    super();
    this.subscribeDisplayMoney();
    this.subscribeReturnMoney();
    this.subscribeProductButton();
  }

  subscribeProductButton() {
    productButtonObservers.subscribe(this.minusDisplayMoney.bind(this));
    productButtonObservers.subscribe(this.updateDisplayMoney.bind(this));
  }

  subscribeDisplayMoney() {
    walletButtonObservers.subscribe(this.plusDisplayMoney.bind(this));
    walletButtonObservers.subscribe(this.updateDisplayMoney.bind(this));
  }

  subscribeReturnMoney() {
    returnButtonObservers.subscribe(this.updateDisplayMoney.bind(this));
  }

  addEvent() {
    this.clickReturnButton();
  }

  clickReturnButton() {
    $(`.extra--money__button`).addEventListener('click', () => {
      returnButtonObservers.fire(this.calculateReturnMoney());
    });
  }

  render() {
    return `
    <div class="operating--window__container">
      ${this.renderInsertMoney()}
      ${this.renderExtraMoneyButton()}
      ${this.renderOperationWindow()}
    </div>
    `;
  }

  renderInsertMoney() {
    return `
    <form class="navbar-form insert--money__form" role="search">
      <div class="form-group form-group-div">
        <input type="text" class="form-control insert--money__input" placeholder="${_.money}" value="${this.insertMoney} ${_.money}" readonly>
      </div>
    </form>
      `;
  }

  renderExtraMoneyButton() {
    return `
    <div class="extra--money__button">
      <button type="button" class="btn btn-danger">${_.return}</button>
    </div>
    `;
  }

  renderOperationWindow() {
    return `
    <form class="navbar-form operation--window__form" role="search">
      <div class="form-group form-group-div log__box">
        <input type="text" class="form-control operating--window" placeholder="${_.info}" value="${this.message}" readonly>
      </div>
    </form>
    `;
  }

  getOperationInfo() {}
}
