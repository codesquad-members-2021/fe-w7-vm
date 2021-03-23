import './style.scss';
import { _ }  from '../util/util.js';
import ProgressScreenView from './progress-screen/ProgressScreenView.js';

export default class VendingMachineView {
  constructor() {
    this.$target;
    this.progressScreenView;
    this.init();
  }

  init() {
    this.$target = this.createEl();
    this.progressScreenView = new ProgressScreenView();
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
    this.$target.appendChild(this.progressScreenView.getEl());
  }
}