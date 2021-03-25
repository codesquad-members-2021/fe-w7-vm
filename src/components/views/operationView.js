import { _ } from '../../util/const';
import { $ } from '../../util/util';
import OperationModel from '../models/operationModel';

export default class OperationView {
  constructor() {
    this.display = new OperationModel();
  }

  addEvent() {
    this.clickReturnButton();
  }

  clickReturnButton() {
    $(`.extra--money__button`).addEventListener('click', () => this.display.fire(this.display.returnButtonObservers));
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
        <input type="text" class="form-control insert--money__input" placeholder="${_.money}" value="${this.display.insertMoney} ${_.money}">
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
        <input type="text" class="form-control operating--window" placeholder="${_.info}" value="${this.display.message}">
      </div>
    </form>
    `;
  }

  getOperationInfo() {}
}
