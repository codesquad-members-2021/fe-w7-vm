// IMPORT MODULES TO TEST
import { _ } from './util/util.js';
import VendingMachine from './vending-machine/VendingMachine.js';
import WalletModel from './wallet/WalletModel.js';
import WalletView from './wallet/WalletView.js';

const Setting = {
  URL: 'http://localhost:3000'
}

document.addEventListener('DOMContentLoaded', main);

function main() {
  // DO TEST CODE
  const $mainContainer = _.$('.main-cont');
  const vendingMachine = new VendingMachine(Setting);

  const moneyData = [
    [100, 13],
    [500, 15],
    [1000, 10],
    [5000, 7],
    [10000, 3],
    [50000, 1],
  ];
  const walletModel = new WalletModel({ moneyData });
  const walletView = new WalletView({ model: walletModel });

  $mainContainer.appendChild(vendingMachine.getViewEl());
  $mainContainer.appendChild(walletView.getEl());
}