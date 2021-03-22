import OperatingView from './operatingView';
import OrderScreen from './orderScreen';

const orderScreen = new OrderScreen();
const operatingView = new OperatingView();

const orderTitle = orderScreen.renderOrderTitle();
const buttonGroup = orderScreen.renderOrderButtonGroup();
const box = operatingView.renderInsertMoney();

export default class MainView {
  init() {
    return this.render();
  }
  render() {
    return `
    <div class="vending-machine">
      ${orderTitle}
      ${buttonGroup}
      ${box}
    </div>
    `;
  }
}
