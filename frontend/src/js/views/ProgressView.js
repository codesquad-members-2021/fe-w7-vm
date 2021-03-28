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
            progressStatusSelector,
            returnMoneyBtnSelector,
        } = progressReference;

        this.progressWrapper = _.$(progressWrapSelector);
        this.inputMoneyStatus = _.$(inputMoneyStatusSelector, this.progressWrapper);
        this.progressStatus = _.$(progressStatusSelector, this.progressWrapper); //여기에 업뎃
        this.returnMoneyBtn = _.$(returnMoneyBtnSelector, this.progressWrapper);
        this.inputTypeInfo = '';

        this.init();
    }

    init = () => {
        this.setWalletSubscribe();
        this.setReturnMoneyBtnClickEvent(this.returnMoneyBtn, this.walletModel);
    };

    // WalletModel Subscribe [ProgressView]
    setWalletSubscribe = () => {
        // WalletView의 지갑 버튼 클릭용
        this.walletModel.walletViewObserver.subscribe(
            this.renderUpdateInputMoneyStatus.bind(this),
        );

        // ProgressView의 반환 버튼 클릭용
        this.walletModel.progressViewObserver.subscribe(
            this.renderProgressStatus.bind(this) //투입버튼, 반환버튼, 상품버튼 전부 재사용할 것.
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
    // render - inputMoneyStatus (투입금액) Update (지갑 버튼 클릭 시)
    renderUpdateInputMoneyStatus = ({insertTotal}) =>
        (this.inputMoneyStatus.textContent = `${addCommaToNumber(insertTotal)}원`);

    // render - progressStatus에 (투입현황) 메세지 render (반환버튼 클릭 시)
    renderProgressStatus = ({insertTotal}) => {
        const newMsg = this.createUpdatedMsg(this.returnMoneyBtn, insertTotal);
        this.progressStatus.innerHTML = newMsg;
    };
    //progressStatus에서 보여줄 메세지 생성
    createUpdatedMsg = (target, updatedData) => {
        let msg;

        if (_.contains(target, "currency-btn")) msg = `💶 ${updatedData.type}원이 투입되었습니다.<br>`;
        if (target === this.returnMoneyBtn) msg = `💸${updatedData}원이 반환되었습니다.<br>`;
        //product가 선택되었을 때 조건 추가해야함.
        this.inputTypeInfo += msg;
        return this.inputTypeInfo;
    };
    // =======================================

}

export default ProgressView;
