import { _ } from '../util/util.js';
import VendingMachineView from './VendingMachineView.js';
// TODO: import 'ProductContainer*'
import ProgressScreenModel from './progress-screen/ProgressScreenModel.js';
import ProgressScreenView from './progress-screen/ProgressScreenView.js';

export default class VendingMachine {
  constructor() {
    // this.productContainerModel;
    // this.productContainerView;
    this.progressScreenModel;
    this.progressScreenView;
    this.view;
    this.init();
  }

  init() {
    this.progressScreenModel = new ProgressScreenModel();
    this.progressScreenView = new ProgressScreenView({ model: this.progressScreenModel });
    this.view = new VendingMachineView({
      progressScreenView: this.progressScreenView,
    });
  }

  insertMoney(money) {
    this.progressScreenModel.addMoney(money);
  }

  getViewEl() {
    return this.view.getEl();
  }
}