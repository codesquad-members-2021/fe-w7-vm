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
        this.renderInitView(this.walletViewWrapper, this.currencyTypes);
        this.renderBudgetInfo();
        // this.walletModel.subscribe()
    }

    renderBudgetInfo = () => {
        this.walletModel.createBudget();
        const budgetTotal = this.walletModel.totalBudget;

        // console.log("budgetData:", budgetData);
        console.log("budgetTotal:", budgetTotal);
    }

    renderInitView = (walletViewWrapper, currencyTypes) => {
        const html = currencyTypes.reduce((acc, type) => acc += this.createWalletHTML(type, 1), '');
        walletViewWrapper.insertAdjacentHTML('afterbegin', html);
    }

    createWalletHTML = (currencyType, count) => {
        const html = `
        <li class="wallet-grid-item">
            <button type="button" class="m-auto py-1 rounded btn btn-success">${currencyType}원</button>
            <span class="bg-white m-auto py-1 border rounded">${count}개</span>
        </li>
        `;
        return html;
    }
}

export default WalletView;