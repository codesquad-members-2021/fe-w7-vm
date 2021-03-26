import _, {addCommaToNumber} from "../utils/util.js";

class WalletView {
    constructor(walletModel, walletReference) {
        this.walletModel = walletModel;

        const { walletWrapSelector, budgetTotalSelector } = walletReference;
        this.walletViewWrapper = _.$(walletWrapSelector);
        this.budgetTotalContainer = _.$(budgetTotalSelector);

        // ---------- ProgressView 관련
        const {
            progressWrapSelector,
            inputMoneyStatusSelector,
            progressStatusSelector,
            returnMoneyBtnSelector,
        } = walletReference;

        this.progressWrapper = _.$(progressWrapSelector);
        this.inputMoneyStatus = _.$(inputMoneyStatusSelector, this.progressWrapper);
        this.progressStatus = _.$(progressStatusSelector, this.progressWrapper);
        this.returnMoneyBtn = _.$(returnMoneyBtnSelector, this.progressWrapper);
        this.inputTypeInfo = '';
        // =========

        this.init();
    }

    init = () => {
        this.walletModel.createBudget();
        this.walletModel.createInitInsertMoneyData();   // 임시 - ProgressView에서 실행하기.

        this.renderBudgetInfo(this.walletModel, this.walletViewWrapper, this.budgetTotalContainer);
        const currencyBtns = _.$all(".currency-btn");
        this.setCurrencyBtnClickEvent(currencyBtns, this.walletModel);
        // 동전 개수 빠지기, 토탈금액 변경하기, 현재투입금액총합 보여주기, 진행상태 알려주기, productView에 구입가능 제품 활성화

        // ProgressView 관련
        this.setReturnMoneyBtnClickEvent(this.returnMoneyBtn, this.walletModel);

        // ---------------
    };

    // 지갑 [type | Count] Render
    renderBudgetInfo = (walletModel, walletViewWrapper, budgetTotalContainer) => {
        const { totalBudget, budgetData } = walletModel;

        const html = budgetData.reduce(
            (resultHtml, { type, count }) =>
                (resultHtml += this.createWalletHTML(type, count)),
            '',
        );
        walletViewWrapper.insertAdjacentHTML('afterbegin', html);

        budgetTotalContainer.textContent = `${addCommaToNumber(totalBudget)}원`;
    };
    createWalletHTML = (currencyType, count) => {
        const html = `
        <li class="wallet-grid-item">
            <button
                type="button"
                class="currency-btn m-auto py-1 rounded btn btn-success"
                data-id="${currencyType}"
            >
                ${currencyType}원
            </button>
            <span class="currency-count bg-white m-auto py-1 border rounded">${count}개</span>
        </li>
        `;
        return html;
    }

    // 지갑 버튼 클릭 Event
    setCurrencyBtnClickEvent = (currencyBtns, walletModel) => (
        currencyBtns.forEach((button) => {
            _.addEvent(button, 'click', (e) => this.currencyBtnClickEventHandler(e, walletModel));
        })
    );
    currencyBtnClickEventHandler = ({target}, walletModel) => {
        const currencyType = target.dataset.id;
        const clickedCurrency = walletModel.getClickedCurrency(currencyType);

        if (clickedCurrency.count <= 0) return;

        walletModel.updateDecreaseCurrencyCnt(currencyType);
        walletModel.updateDecreaseTotalBudget(parseInt(currencyType));
        walletModel.updateInsertMoneyData(currencyType);
        walletModel.updateInsertTotal();

        this.renderUpdateCurrecnyCnt(target, clickedCurrency);
        this.renderUpdateTotalBudget(walletModel.totalBudget);

        // 임시: ProgressView 관련
        this.renderUpdateInputMoneyStatus(walletModel.insertTotal);
        this.renderProgressStatus(target, clickedCurrency); //투입버튼, 반환버튼, 상품버튼 전부 재사용할 것.
        // ---

        this.renderDisableCurrencyBtn(target);
    };

    renderUpdateCurrecnyCnt = (target, clickedCurrency) =>  {
        const countContainer = target.nextElementSibling;
        countContainer.textContent = `${clickedCurrency.count}개`;
    };

    renderUpdateTotalBudget = (totalBudgetData) =>
        (this.budgetTotalContainer.textContent = `${addCommaToNumber(totalBudgetData)}원`);

    renderDisableCurrencyBtn = (currencyBtn) => {
        const findCurrency = this.walletModel.budgetData.find(
            (data) =>
                data.type === Number(currencyBtn.innerText.replace(/원/g, '')),
        );
        if (findCurrency.count > 0) return;

        _.addClass(currencyBtn, 'disabled', 'disabled__item');
    };

    // 임시: ProgressView 관련
    renderUpdateInputMoneyStatus = (insertTotalData = 0) =>
        (this.inputMoneyStatus.textContent = `${addCommaToNumber(
            insertTotalData,
        )}원`);


    // 반환 버튼 클릭
    setReturnMoneyBtnClickEvent = (returnMoneyBtn, walletModel) =>
        _.addEvent(returnMoneyBtn, 'click', () =>
            this.returnMoneyBtnClickEventHandler(walletModel),
        );
    returnMoneyBtnClickEventHandler = (walletModel) => {
        walletModel.updateRecoverBudgetData();
        walletModel.updateTotalBudget();
        this.renderUpdateInputMoneyStatus();
        this.renderUpdateTotalBudget(walletModel.totalBudget);
        this.renderProgressStatus(this.returnMoneyBtn, this.walletModel.insertTotal);

        const currencyBtns = _.$all(".currency-btn");
        this.renderUpdateCurrencyBtns(currencyBtns, walletModel);
    };

    // 반환 버튼 누를 시 지갑화면의 버튼, 갯수 Update
    renderUpdateCurrencyBtns = (currencyBtns, walletModel) => {
        currencyBtns.forEach((btn) => {
            const currencyCnt = walletModel.getClickedCurrency(btn.dataset.id).count;
            if (currencyCnt > 0) _.removeClass(btn, 'disabled', 'disabled__item');
            const countContainer = btn.nextElementSibling;
            countContainer.textContent = `${currencyCnt}개`;
        });
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

    //progressStatus에 메세지 렌더링
    renderProgressStatus = (target, updatedData) => {
        const newMsg = this.createUpdatedMsg(target, updatedData);
        this.progressStatus.innerHTML = newMsg;
    };
    // ---
}

export default WalletView;