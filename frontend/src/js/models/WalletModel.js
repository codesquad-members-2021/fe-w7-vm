import _ from '../utils/util.js';
import Observable from "../utils/Observable.js";
import Currency from '../utils/Currency.js';

class WalletModel {
    constructor() {
        this.currencyTypes = [10, 50, 100, 500, 1000, 5000, 10000];
        this.budgetData;
        this.budgetTotal;   // 구 totalBudget

        this.insertTotal;
        this.clickedCurrency;

        this.walletViewObserver = new Observable();
        this.progressViewObserver = new Observable();
    };

    // -- 유틸
    getRandomNumBtOneToNine = () => Math.floor(Math.random() * 9) + 1;

    // [1] WalletView
    // 지갑 지폐 단위 및 잔여금액 데이터 생성
    createBudget = () => {
        this.budgetData = this.currencyTypes.map(
            (type) => new Currency(type, this.getRandomNumBtOneToNine()),
        );
        this.budgetTotal = this.calculateTotalValue(this.budgetData);
    };

    // 지갑 총 금액 or 투입 금액 계산용
    calculateTotalValue = (arrCurrencyData) =>
        arrCurrencyData.reduce(
            (initValue, currencyData) =>
                (initValue += currencyData['type'] * currencyData['count']),
            0,
        );

    findCurrency = (arrCurrencyData, clickedCurrencyType) =>
        arrCurrencyData.find(
            (currency) => currency.type === Number(clickedCurrencyType),
        );

    // 지갑 금액 단위 Decrease Count
    updateDecreaseCurrencyCnt = (clickedCurrencyType) => {
        this.clickedCurrency = this.findCurrency(this.budgetData, clickedCurrencyType);
        (this.clickedCurrency.count > 0) && this.clickedCurrency.count--;
    };

    // 지갑 총 금액 Decrease (클릭된 금액 단위 기준, [10, 50 ~ 10000] 중 하나를 minus)
    updateDecreaseBudgetTotal = (currencyType) => {
        if (this.budgetTotal <= 0) return;
        this.budgetTotal -= currencyType;
    };

    // 지갑 총 금액 Update
    updateBudgetTotal = () =>
        (this.budgetTotal = this.calculateTotalValue(this.budgetData));

    // WalletView에서 금액 버튼 클릭했을 시.. (통합)
    updateForWalletViewCurrenyBtns = (currencyType) => {
        this.updateDecreaseCurrencyCnt(currencyType);
        this.updateDecreaseBudgetTotal(parseInt(currencyType));
        this.updateInsertTotal(currencyType);
        this.updateBudgetTotal();

        this.walletViewObserver.notify(this);
    };

    // ProgressView에서 반환 버튼 클릭 시.. (통합)
    updateForProgressViewReturnMoneyBtn = () => {
        this.updateBudgetTotal();

        this.progressViewObserver.notify(this);
    };

    // =================================

    // [2] ProgressView
    // 돈 투입되었을 시, 총 투입금액 Update
    updateInsertTotal = (currencyType) =>
        (this.insertTotal = (this.insertTotal || 0) + Number(currencyType));

    // 반환버튼 클릭 시 돈 반환
    updateRecoverBudgetData = () => {
        // 다시 만들어야해..!
    };
}

export default WalletModel;