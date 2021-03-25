import _ from "../utils/util.js";

class WalletView {
    constructor(walletModel, walletReference) {
        this.walletModel = walletModel;
        this.walletViewWrapper = _.$(walletReference.walletWrapSelector);
        this.budgetTotalContainer = _.$(walletReference.budgetTotalSelector);
        this.budgetData;
        this.init();
    }

    init = () => {
        this.renderBudgetInfo();
        this.walletModel.subscribe(); //동전 개수 빠지기, 토탈금액 변경하기, 현재투입금액총합 보여주기, 진행상태 알려주기, productView에 구입가능 제품 활성화
    }

    addClickEvent = () => {
        const currencyBtns = _.$all(".currency-btn");
        currencyBtns.forEach((button) => {
            _.addEvent(button, 'click', (event) => {
                this.decreaseCount(event);
            });
        })
    }

    decreaseCount = (event) => {
        const clickedButton = event.target;
        const clickedButtonType = _.getId("data-id", clickedButton);
        this.budgetData.forEach((currencyPair) => {
            if (JSON.stringify(currencyPair.type) === clickedButtonType && currencyPair.count) {
                currencyPair.count--;
                this.updateCount(clickedButton, currencyPair.count);
            }
        })
    }

    updateCount = (target, count) => {
        const countContainer = target.nextElementSibling;
        countContainer.textContent = `${count}개`;
    }

    renderBudgetInfo = async () => {
        this.walletModel.createBudget();
        this.budgetData = this.walletModel.budgetData;
        const budgetTotal = this.walletModel.totalBudget;
        this.renderInitView(this.walletViewWrapper, this.budgetData);
        this.budgetTotalContainer.textContent = `${this.addCommaToNumber(budgetTotal)}원`;
        await this.addClickEvent();
    }

    renderInitView = (walletViewWrapper, currencyTypes) => {
        const html = currencyTypes.reduce((acc, { type, count }) => acc += this.createWalletHTML(type, count), '');
        walletViewWrapper.insertAdjacentHTML('afterbegin', html);
    }

    addCommaToNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    createWalletHTML = (currencyType, count) => {
        const html = `
        <li class="wallet-grid-item">
            <button type="button" class="currency-btn m-auto py-1 rounded btn btn-success" data-id="${currencyType}">${currencyType}원</button>
            <span class="currency-count bg-white m-auto py-1 border rounded">${count}개</span>
        </li>
        `;
        return html;
    }
}

export default WalletView;