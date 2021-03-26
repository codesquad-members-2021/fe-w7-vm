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
        this.progressStatus = _.$(progressStatusSelector, this.progressWrapper); //여기에 업뎃
        this.returnMoneyBtn = _.$(returnMoneyBtnSelector, this.progressWrapper);

        this.setUpUpdateEvent();
    }

    //walletView에서 클릭이벤트가 일어난 target이 무엇인지를 파악해서 progress에 보여줘야함.
    setUpUpdateEvent = () => {
        this.progressStatus.addEventLister('notify', this.renderUpdateMsg)
    }

    renderUpdateMsg = () => {
        const newData = this.walletModel.clickedCurrency;
        this.progressStatus.textContent = `${newData}`;
        console.log("된다.")
    }
}

export default ProgressView;
