import _ from '../utils/util.js';

class ProgressView {
    constructor(walletModel, progressReference) {
        this.walletModel = walletModel;
        const {
            progressWrapSelector,
            inputMoneyStatusSelector,
            progressStatusSelector,
            returnMoneyBtnSelector,
        } = progressReference;

        this.progressWrapper = _.$(progressWrapSelector);
        this.inputMoneyStatus = _.$(inputMoneyStatusSelector, this.progressWrapper);
        this.progressStatus = _.$(progressStatusSelector, this.progressWrapper);
        this.returnMoneyBtn = _.$(returnMoneyBtnSelector, this.progressWrapper);
    }
}

export default ProgressView;
