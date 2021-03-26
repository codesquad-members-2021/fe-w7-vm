import { _ } from '../../util/const';
import { $ } from '../../util/util';
import OperationModel from '../models/operationModel';
import { returnButtonObservers } from '../observer/observer';

export default class OperationView extends OperationModel {
  constructor() {
    super();
    this.displayMoneySubscribe();
    this.returnMoneySubscribe();
  }

  displayMoneySubscribe() {
    returnButtonObservers.subscribe(this.plusDisplayMoney.bind(this));
    returnButtonObservers.subscribe(this.updateDisplayMoney.bind(this));
    returnButtonObservers.subscribe(this.changeStatePossible.bind(this));
  }

  returnMoneySubscribe() {
    console.log(this);
    returnButtonObservers.subscribe(this.currentMoney.bind(this));
    returnButtonObservers.subscribe(this.updateDisplayMoney.bind(this));
  }

  addEvent() {
    this.clickReturnButton();
  }

  clickReturnButton() {
    $(`.extra--money__button`).addEventListener('click', () => returnButtonObservers.fire());
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
        <input type="text" class="form-control insert--money__input" placeholder="${_.money}" value="${this.insertMoney} ${_.money}">
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
    <form class="navbar-form insert--money__form" role="search">
      <div class="form-group form-group-div">
        <input type="text" class="form-control operating--window" placeholder="${_.info}" value="${this.message}">
      </div>
    </form>
    `;
  }

  getOperationInfo() {}
}
