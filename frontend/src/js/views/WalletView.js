import _ from "../utils/util.js";

class WalletView {
    constructor(walletModel, walletReference) {
        this.walletModel = walletModel;
        this.walletViewWrapper = _.$(walletReference.walletWrapSelector);
        this.budgetTotalContainer = _.$(walletReference.budgetTotalSelector);
        this.currencyTypes = walletModel.currencyTypes;

        this.init();
    }

    init = () => {
        this.renderBudgetInfo();
        // this.walletModel.subscribe()
    }

    renderBudgetInfo = () => {
        const countNodes = _.$all('.currency-count');
        this.walletModel.createBudget();
        this.renderInitView(this.walletViewWrapper, this.walletModel.budgetData);
        const budgetTotal = this.walletModel.totalBudget;
        this.budgetTotalContainer.textContent = `${this.addCommaToNumber(budgetTotal)}원`;
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
            <button type="button" class="m-auto py-1 rounded btn btn-success">${currencyType}원</button>
            <span class="currency-count bg-white m-auto py-1 border rounded">${count}개</span>
        </li>
        `;
        return html;
    }
}

export default WalletView;