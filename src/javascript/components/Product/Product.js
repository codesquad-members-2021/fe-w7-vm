import Component from '../../core/Component.js';

export default class Product extends Component {
  selectPropsToUse() {
    const { title, price, count } = this.props;
    this.selfProps = { title, price, count };
  }
  getTemplate() {
    const { title, price, count } = this.selfProps;

    return `
      <li class="menu_piece">
        <div class="menu_box ${!count ? 'soldout' : ''}">${title}</div>
        <div class="menu_price">${price}</div>
      </li>
      `;
  }
  mountComponents() {}
  setEventLinstener() {}
}
