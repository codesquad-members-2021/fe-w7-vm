import './style.scss';
import { _ }  from '../util/util.js';
import ProgressScreenView from './progress-screen/ProgressScreenView.js';

export default class VendingMachineView {
  constructor({ productContainerView, progressScreenView }) {
    this.$target;
    this.productContainerView = productContainerView;
    this.progressScreenView = progressScreenView;
    this.init();
  }

  init() {
    this.$target = this.createEl();
    this.render();
  }

  createEl() {
    return _.genEl('DIV', {
      classNames: ['vending-machine'],
    });
  }

  getEl() {
    return this.$target;
  }

  render() {
    // this.$target.appendChild(this.productContainerView.getEl());
    this.$target.appendChild(this.progressScreenView.getEl());
  }
}