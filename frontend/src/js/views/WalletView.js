import _ from "../utils/util.js";

class WalletView {
    constructor(walletModel, walletReference) {
        this.walletModel = walletModel;
        this.walletViewWrapper = _.$(walletReference.walletWrapSelector);
        this.budgetTotalContainer = _.$(walletReference.budgetTotalSelector);
        this.budgetData;
        this.budgetTotal;
        this.init();
    }

    init = () => {
        this.renderBudgetInfo();
        // 동전 개수 빠지기, 토탈금액 변경하기, 현재투입금액총합 보여주기, 진행상태 알려주기, productView에 구입가능 제품 활성화
    }

    setCurrencyBtnClickEvent = () => {
        const currencyBtns = _.$all(".currency-btn");
        currencyBtns.forEach((button) => {
            _.addEvent(button, 'click', (e) => this.currencyBtnClickEventHandler(e));
        })
    }
    currencyBtnClickEventHandler = (e) => {
        const { target } = e;
        const currencyType = target.dataset.id;

        this.decreaseCount(target);
        // const convertBudgetTotal = parseInt((this.budgetTotalContainer.innerText).replace(/,|원/g, ''));
        this.walletModel.updateBudgetTotal(parseInt(currencyType));
        this.renderDisableCurrencyBtn(target);
        this.budgetTotalContainer.textContent = `${this.addCommaToNumber(this.walletModel.totalBudget)}원`;
    }

    decreaseCount = (clickedBtn) => {
        const clickedButtonType = _.getId("data-id", clickedBtn);
    // 모델로 가야함
    
        this.updateCount(clickedBtn, currencyPair.count);
        // this.budgetData.forEach((currencyPair) => {
        //     if (JSON.stringify(currencyPair.type) === clickedButtonType && currencyPair.count) {

        //         // const findData = this.budgetData.find((currency) => currencyType === currency.type);
        //         if (currencyPair.count <= 0) return;
        //         currencyPair.count--;

        //         this.updateCount(clickedBtn, currencyPair.count);
        //     }
        // })
    };

    updateCount = (target, count) => {
        const countContainer = target.nextElementSibling;
        countContainer.textContent = `${count}개`;
    }

    renderBudgetInfo = () => {
        this.walletModel.createBudget();
        this.budgetData = this.walletModel.budgetData;
        const totalBudget = this.walletModel.totalBudget;
        this.renderInitView(this.walletViewWrapper, this.budgetData);
        this.budgetTotalContainer.textContent = `${this.addCommaToNumber(totalBudget)}원`;
        this.setCurrencyBtnClickEvent();
    }

    renderInitView = (walletViewWrapper, currencyTypes) => {
        const html = currencyTypes.reduce((acc, { type, count }) => acc += this.createWalletHTML(type, count), '');
        walletViewWrapper.insertAdjacentHTML('afterbegin', html);
    }

    renderDisableCurrencyBtn = (currencyBtn) => {
        const findCurrency = this.walletModel.budgetData.find(
            (data) =>
                data.type === Number(currencyBtn.innerText.replace(/원/g, '')),
        );
        if (findCurrency.count > 0) return;

        _.addClass(currencyBtn, 'disabled', 'disabled__item');
    };

    addCommaToNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

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
}

export default WalletView;