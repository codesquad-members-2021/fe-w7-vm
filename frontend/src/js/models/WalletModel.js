import _ from '../utils/util.js';
import Observable from "../utils/Observable.js";
import Currency from '../utils/Currency.js';

class WalletModel {
    constructor() {
        this.currencyTypes = [10, 50, 100, 500, 1000, 5000, 10000];
        this.budgetData;
        this.budgetTotal;   // 구 totalBudget

        this.insertMoneyData;
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

    // 지갑 총 금액 Update (budgetData 기준으로 업데이트)
    updateBudgetTotal = () =>
        (this.budgetTotal = this.calculateTotalValue(this.budgetData));

    // WalletView에서 금액 버튼 클릭했을 시.. (통합)
    updateForWalletViewCurrenyBtns = (currencyType) => {
        this.updateDecreaseCurrencyCnt(currencyType);
        this.updateDecreaseBudgetTotal(parseInt(currencyType));
        this.updateInsertMoneyData(currencyType);

        this.updateBudgetTotal();
        this.updateInsertTotal();

        this.walletViewObserver.notify(this);
    };

    // ProgressView에서 반환 버튼 클릭 시.. (통합)
    updateForProgressViewReturnMoneyBtn = () => {
        this.updateRecoverBudgetData();
        this.updateBudgetTotal();

        this.progressViewObserver.notify(this);

        this.updateInitInsertMoneyData();
        this.updateInsertTotal();
    };

    // =================================

    // [2] ProgressView
    // 넣은 금액을 Backup하는 InsertMoneyData 생성
    createInsertMoneyData = () => {
        this.insertMoneyData = this.currencyTypes.map(
            (type) => new Currency(type, 0),
        );
    };

    // 돈 투입되었을 시, 총 투입금액 Update (insertMoneyData 기준으로 계산)
    updateInsertTotal = () =>
        (this.insertTotal = this.calculateTotalValue(this.insertMoneyData));

    // 돈 투입되었을 시, InsertMoneyData Update (CurrencyType에 따라 추가)
    updateInsertMoneyData = (currencyType) => {
        if (!this.insertMoneyData) return;
        const insertCurrency = this.insertMoneyData.find(
            (currency) => Number(currencyType) === currency.type,
        );
        insertCurrency.count++;
    };

    // 돈 반환 시, InsertMoneyData의 Count 초기화
    updateInitInsertMoneyData = () => this.insertMoneyData.forEach((currency) => (currency.count = 0));

    // 반환버튼 클릭 시 돈 반환
    updateRecoverBudgetData = () => {
        this.budgetData.forEach((budgetCurrency) => {
            const bakCurrency = this.insertMoneyData.find(
                (insertCurrency) => insertCurrency.type === budgetCurrency.type,
            );
            if (!bakCurrency || bakCurrency <= 0) return;
            budgetCurrency.count += bakCurrency.count;
        });
    };

    // 반환버튼 클릭 시, InsertTotal 초기화
    updateInitInsertTotal = () => (this.insertTotal = 0);


}

export default WalletModel;