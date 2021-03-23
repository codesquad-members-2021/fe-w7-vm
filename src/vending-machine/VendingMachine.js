import VendingMachineView from './VendingMachineView.js';
import ProgressScreenModel from './progress-screen/ProgressScreenModel.js';

export default class VendingMachine {
  constructor() {
    this.progressScreenModel;
    this.view;
    this.init();
  }

  init() {
    this.progressScreenModel = new ProgressScreenModel();
    this.view = new VendingMachineView();
  }

  insertMoney(money) {
    this.progressScreenModel.addMoney(money);
  }

  getViewEl() {
    return this.view.getEl();
  }
}