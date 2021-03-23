// IMPORT MODULES TO TEST
import { _ } from './util/util.js';
import VendingMachine from './vending-machine/VendingMachine.js';


document.addEventListener('DOMContentLoaded', main);

function main() {
  // DO TEST CODE
  const $mainContainer = _.$('.main-cont');
  const vendingMachine = new VendingMachine();

  $mainContainer.appendChild(vendingMachine.getViewEl());
}