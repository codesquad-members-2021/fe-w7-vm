import "../style/style.scss";
import { createSectionWithClassname } from "./DOM.js";
import { _ } from "./utils.js";
import { VIEWS, NUMBERS } from "./variables.js";
import ProductView from "./view/ProductView.js";
import WalletView from "./view/WalletView.js";
import ProcessView from "./view/ProcessView.js";
import WalletModel from "./model/WalletModel.js";
import ProductModel from "./model/ProductModel.js";

const app = _.$("#app");

function init() {
  const timer = {
    count: 0,
  };

  Object.values(VIEWS).forEach((e) => createSectionWithClassname(app, e));
  const walletModel = new WalletModel(timer);
  const productModel = new ProductModel();
  new WalletView(walletModel, _.$(`.${VIEWS.WALLET}`));
  new ProductView(walletModel, productModel, _.$(`.${VIEWS.PRODUCT}`));
  new ProcessView(walletModel, productModel, _.$(`.${VIEWS.PROCESS}`));
  _.$("body").insertAdjacentHTML("afterbegin","<h1 class='title'>Adela <span>& json</span> Vending Machine</h1>");
  _.$("body").insertAdjacentHTML("afterbegin","<div class='timer hidden'></div>");
  const timerHtml = _.$(".timer");
  timer.html = timerHtml;
  setInterval(() => {
    if (timer.count >= NUMBERS.TERM) {
      walletModel.returnBalance();
      timer.count = 0;
      timer.html.classList.add('hidden');
      return;
    }
    timer.html.innerText = ++timer.count;
  }, NUMBERS.INITMS);
}

init();
