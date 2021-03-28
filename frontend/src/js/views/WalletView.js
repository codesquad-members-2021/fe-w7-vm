import _, {addCommaToNumber} from "../utils/util.js";
import WalletModel from "../models/WalletModel.js"; // 임시. 마지막에 지우기

class WalletView {
    /**
     *
     * @param {WalletModel} walletModel
     * @param {*} walletReference
     */
    constructor(walletModel, walletReference) {
        this.walletModel = walletModel;

        const {
            walletWrapSelector,
            budgetTotalSelector,
            currencyBtnsSelector,
        } = walletReference;

        this.walletViewWrapper = _.$(walletWrapSelector);
        this.budgetTotalContainer = _.$(budgetTotalSelector);
        this.currencyBtns;
        this.currencyBtnsSelector = currencyBtnsSelector;

        this.init();
    }

    init = () => {
        this.setWalletSubscribe();

        this.walletModel.createBudget();
        this.renderInitBudgetInfo(this.walletModel, this.walletViewWrapper, this.budgetTotalContainer);

        this.currencyBtns = _.$all(this.currencyBtnsSelector);  // 꼭 renderInitBudgetInfo 후 실행
        this.setCurrencyBtnClickEvent(this.currencyBtns, this.walletModel);

        // 동전 개수 빠지기, 토탈금액 변경하기, 현재투입금액총합 보여주기, 진행상태 알려주기, productView에 구입가능 제품 활성화
    };

    // WalletModel Subscribe [WalletView]
    setWalletSubscribe = () => {
        this.walletModel.walletViewObserver.subscribe(
            this.renderUpdateCurrecnyCnt.bind(this),
            this.renderUpdateTotalBudget.bind(this),
            this.renderDisableCurrencyBtn.bind(this),
        );

        this.walletModel.progressViewObserver.subscribe(
            // Progress의 반환이 클릭되면 지갑의 총금액이 업뎃되야하니까..
            this.renderUpdateTotalBudget.bind(this),
            this.renderUpdateCurrencyBtns.bind(this),
        );
    };

    // 지갑 [type | Count] Render (init)
    renderInitBudgetInfo = (walletModel, walletViewWrapper, budgetTotalContainer) => {
        const { budgetTotal, budgetData } = walletModel;
        const html = budgetData.reduce(
            (resultHtml, { type, count }) =>
                (resultHtml += this.createWalletHTML(type, count)),
            '',
        );
        walletViewWrapper.insertAdjacentHTML('afterbegin', html);

        budgetTotalContainer.textContent = `${addCommaToNumber(budgetTotal)}원`;
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
    };

    // 지갑 버튼 클릭 Event
    setCurrencyBtnClickEvent = (currencyBtns, walletModel) => (
        currencyBtns.forEach((button) => {
            _.addEvent(button, 'click', (e) => this.currencyBtnClickEventHandler(e, walletModel));
        })
    );
    currencyBtnClickEventHandler = ({target}, walletModel) => {
        const currencyType = target.dataset.id;
        const clickedCurrency = walletModel.findCurrency(walletModel.budgetData, currencyType);

        if (clickedCurrency.count <= 0) return;

        walletModel.updateForWalletViewCurrenyBtns(currencyType);
    };

    // [walletModel subscribe : WalletView] ====
    // render - 금액 Count Update
    renderUpdateCurrecnyCnt = ({budgetData}) =>  {
        this.currencyBtns.forEach((btn) => {
            const countContainer = btn.nextElementSibling;
            const currencyType = Number(btn.dataset.id);
            const count = budgetData.find((currency) => currency.type === currencyType).count;
            countContainer.textContent = `${count}개`
        });
    };

    // render - 총 금액 Update
    renderUpdateTotalBudget = ({budgetTotal}) =>
        (this.budgetTotalContainer.textContent = `${addCommaToNumber(budgetTotal)}원`);

    // render - 상태 체크 후 금액 버튼 비활성
    renderDisableCurrencyBtn = ({budgetData}) => {
        this.currencyBtns.forEach((btn) => {
            const currencyType = Number(btn.dataset.id);
            const count = budgetData.find((currency) => currency.type === currencyType).count;
            if (count > 0) return;
            _.addClass(btn, 'disabled', 'disabled__item');
        });
    };

    // render - 반환 버튼이 눌리면 지갑화면의 버튼, 갯수 Update (Progress ReturnBtn -> Wallet.currentBtns)
    // 기능 추가 필요
    renderUpdateCurrencyBtns = ({budgetData}) => {
        this.currencyBtns.forEach((btn) => {
            const btnCurrency = Number(btn.dataset.id);
            const currencyCnt = budgetData.find((currency) => currency.type === btnCurrency).count;

            if (currencyCnt > 0) _.removeClass(btn, 'disabled', 'disabled__item');
            const countContainer = btn.nextElementSibling;
            countContainer.textContent = `${currencyCnt}개`;
        });
    };

    /*
    // 어디에 넣어야 할지 생각하기 (이 주석들)
    returnMoneyBtnClickEventHandler = (walletModel) => {
        // ...
        this.returnBiggerMoneyFirst(walletModel);
    }

    //반환 버튼이 눌리면 큰 단위부터 순차적으로 반환. 문제점: 이미 써버린 동전 갯수들이 그대로 나옴.
    returnBiggerMoneyFirst({ insertTotal, currencyTypes, budgetData }){
        console.table(budgetData);//확인용
        currencyTypes.reduceRight((prev, type, idx) => {
            const quotient = parseInt(prev / type);
            budgetData[idx].count += quotient;
            const leftOver = prev % type;
            return leftOver;
        }, insertTotal);
        console.table(budgetData);//확인용
    }
    */

}

export default WalletView;