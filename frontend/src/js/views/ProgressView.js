import _, {addCommaToNumber} from '../utils/util.js';
import WalletModel from "../models/WalletModel.js"; // 임시. 마지막에 지우기

class ProgressView {
    /**
     *
     * @param {WalletModel} walletModel
     * @param {*} progressReference
     */
    constructor(walletModel, progressReference) {
        this.walletModel = walletModel;
        const {
            progressWrapSelector,
            inputMoneyStatusSelector,
            balanceAlertSelector,
            progressStatusSelector,
            returnMoneyBtnSelector,
        } = progressReference;

        this.progressWrapper = _.$(progressWrapSelector);
        this.inputMoneyStatus = _.$(inputMoneyStatusSelector, this.progressWrapper);
        this.balanceAlertSelector = _.$(balanceAlertSelector, this.progressWrapper);
        this.progressStatus = _.$(progressStatusSelector, this.progressWrapper);
        this.returnMoneyBtn = _.$(returnMoneyBtnSelector, this.progressWrapper);
        this.inputTypeInfo = '';

        this.init();
    }

    init = () => {
        this.setWalletSubscribe();
        this.walletModel.createInsertMoneyData();
        this.setReturnMoneyBtnClickEvent(this.returnMoneyBtn, this.walletModel);
    };

    // WalletModel Subscribe [ProgressView]
    setWalletSubscribe = () => {
        // WalletView의 지갑 버튼 클릭용
        this.walletModel.walletViewObserver.subscribe(
            this.renderUpdateInputMoney.bind(this),
            this.renderActivatedReturnMoneyBtn.bind(this),
            this.renderProgressStatusForCurrencyBtnsClick.bind(this)
        );

        // ProgressView의 반환 버튼 클릭용
        this.walletModel.progressViewObserver.subscribe(
            this.renderUpdateInputMoneyForReturnMoneyBtn.bind(this),
            this.renderDisabledReturnMoneyBtn.bind(this),
            this.renderProgressStatusForReturnMoneyBtnClick.bind(this)
        );

        // ProductView의 상품 버튼 클릭용
        this.walletModel.productViewObserver.subscribe(
            this.renderUpdateInputMoney.bind(this),
            this.renderProgressStatusForProductBtnsClick.bind(this)
        )
    };

    // 반환 버튼 클릭
    setReturnMoneyBtnClickEvent = (returnMoneyBtn, walletModel) =>
        _.addEvent(returnMoneyBtn, 'click', () =>
            this.returnMoneyBtnClickEventHandler(walletModel),
        );
    returnMoneyBtnClickEventHandler = (walletModel) =>
        walletModel.updateForProgressViewReturnMoneyBtn();

    // [walletModel subscribe : ProgressView] ========
    // render - inputMoneyStatus (투입금액) Update (지갑 버튼 & 상품 버튼 클릭 시)
    renderUpdateInputMoney = ({insertTotal}) =>
        (this.inputMoneyStatus.textContent = `${addCommaToNumber(insertTotal)}원`);

    // render - returnBtn (반환버튼) (재)활성화 (지갑 버튼 클릭 시)
    renderActivatedReturnMoneyBtn = () =>
        (_.removeClass(this.returnMoneyBtn, 'disabled', 'disabled__item'));

    // render - inputMoneyStatus (투입금액) Update (반환 버튼 클릭 시)
    renderUpdateInputMoneyForReturnMoneyBtn = () =>
        (this.inputMoneyStatus.textContent = `0원`);

    // render - returnMoneyBtn (반환버튼) 비활성화 (반환 버튼 클릭 시)
    renderDisabledReturnMoneyBtn = () =>
        (_.addClass(this.returnMoneyBtn, 'disabled', 'disabled__item')); //❗️여전히 클릭이 된다!!버그 고쳐야함❗️

    // render - progressStatus에 (투입현황) 메세지 render (ProgressView의 반환버튼 클릭 시)
    renderProgressStatusForReturnMoneyBtnClick = ({insertTotal}) => {
        const newMsg = this.createUpdatedMsgForReturnBtns(insertTotal);
        this.progressStatus.innerHTML = newMsg;
    };
    createUpdatedMsgForReturnBtns = (insertTotal) => {
        const msg = `💸${insertTotal}원이 반환되었습니다.<br>`;
        return this.getUpdateInputTypeInfo(msg);
    };

    // render - progressStatus에 (투입현황) 메세지 render (WalletView의 지갑버튼 클릭 시)
    renderProgressStatusForCurrencyBtnsClick = ({clickedCurrency}) => {
        const newMsg = this.createUpdatedMsgForCurrecyBtns(clickedCurrency);
        this.progressStatus.innerHTML = newMsg;
    };
    createUpdatedMsgForCurrecyBtns = ({type}) => {
        const msg = `💶 ${type}원이 투입되었습니다.<br>`;
        return this.getUpdateInputTypeInfo(msg);
    };

    getUpdateInputTypeInfo = (msg) => (this.inputTypeInfo += msg);


    // product가 선택되었을 때 조건 추가해야함.
    // [walletModel subscribe : ProductView] ===========
    renderProgressStatusForProductBtnsClick = ({clickedProductData}) => {
        const newMsg = this.createUpdatedMsgForProductBtns(clickedProductData);
        this.progressStatus.innerHTML = newMsg;
    };
    createUpdatedMsgForProductBtns = ({name}) => {
        const msg = `🥤${name}를(을) 선택하셨습니다.<br>`;
        return this.getUpdateInputTypeInfo(msg);
    }

}

export default ProgressView;
