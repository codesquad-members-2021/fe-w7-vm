import OrderScreen from './orderScreen';

const orderScreen = new OrderScreen();
const orderTitle = orderScreen.renderOrderTitle();
const buttonGroup = orderScreen.renderOrderButtonGroup();
export default class MainView {
  init() {
    return this.render();
  }
  render() {
    return `
    <div class="vending-machine">
      ${orderTitle}
      ${buttonGroup}
    </div>
    `;
  }
}
