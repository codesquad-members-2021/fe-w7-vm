import "../style/style.scss";
import { createSectionWithClassname } from "./DOM.js";
import { _ } from "./utils.js";
import ProductView from "./ProductView.js";
// import ProcessView from "./ProcessView.js";
import WalletView from "./WalletView.js";
// import Manager from "./Manager.js";
import WalletModel from "./WalletModel";
import ProductModel from "./ProductModel";
import ProcessView from "./ProcessView";

const app = _.$("#app");
const views = {
  PRODUCT: "productView",
  PROCESS: "processView",
  WALLET: "walletView",
};

function init() {
  const timer = {
    count : 0
  };

  Object.values(views).forEach((e) => createSectionWithClassname(app, e));
  const walletModel = new WalletModel(timer);
  const productModel = new ProductModel();
  new WalletView(walletModel, _.$(`.${views.WALLET}`));
  new ProductView(walletModel, productModel, _.$(`.${views.PRODUCT}`));
  new ProcessView(walletModel, productModel, _.$(`.${views.PROCESS}`));

  setInterval(() => {
    timer.count++;
    console.log(timer.count);
    if(timer.count >= 5) {
      walletModel.returnBalance();
      timer.count = 0;
    }
  }, 1000);
}

// function init() {
//   Object.values(views).forEach((e) => createSectionWithClassname(app, e));
//   const manager = new Manager();
//   const productView = new ProductView(_.$(`.${views.PRODUCT}`), manager);
//   const processView = new ProcessView(_.$(`.${views.PROCESS}`), manager);
//   const walletView = new WalletView(_.$(`.${views.WALLET}`), manager);
//   manager.setView(productView, processView, walletView);
//   productView.init();
//   processView.init();
//   walletView.init();
// }

init();
