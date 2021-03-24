import _ from "../utils/util.js";

class WalletView {
    constructor(walletModel) {
        this.walletModel = walletModel;
        this.walletViewWrapper = _.$(this.walletModel.walletWrapSelector);
    }
}

export default WalletView;