export default class OrderScreen {
  constructor() {
    this.title = `Lonely Vending Machine`;
    this.buttonNumber = 20;
    this.order = 'order';
    this.price = 'price';
  }

  orderTitle() {
    return `
      <div class="order--title">
        ${this.title}
      </div>
      `;
  }

  getOrderButton() {
    // data는 fetch로 받아올 것
    return `
    <div class="list-group-item order--button__box">
      <button type="button" class="btn btn-default order--button">${this.order}</button>
      <div class="order--price"><span>${this.price}</span></div>
    </div>
    `;
  }

  renderOrderButtonGroup() {
    const tempArray = Array(this.buttonNumber).fill();
    const buttonGroup = tempArray.map((acc, cur) => {
      cur = this.getOrderButton();
      acc += cur;
      return acc;
    }, ``);
    return buttonGroup;
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
