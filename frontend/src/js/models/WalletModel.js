import Currency from '../utils/Currency.js';
import _ from '../utils/util.js';

class WalletModel {
    constructor() {
        this.currencyTypes = [10, 50, 100, 500, 1000, 5000, 10000];
        this.budgetData;
        this.totalBudget;

        this.insertMoneyData;
        this.insertTotal;

        this.clickedCurrency;
    };


    // 지갑 지폐 단위 및 잔여금액 데이터 생성
    createBudget = () => {
        this.budgetData = this.currencyTypes.map(
            (type) => new Currency(type, this.getRandomNumBtOneToNine()),
        );
        this.totalBudget = this.calculateTotalBudgetValue(this.budgetData);
    };

    // 투입 금액 데이터 목록 생성 (초기)
    createInitInsertMoneyData = () => {
        const initialCount = 0;
        this.insertMoneyData = this.currencyTypes.map(
            (type) => new Currency(type, initialCount),
        );
    };

    calculateTotalBudgetValue = () =>
        this.budgetData.reduce(
            (initValue, currencyData) =>
                (initValue += currencyData['type'] * currencyData['count']),
            0,
        );

    calculateTotalValue = (arrCurrencyData) =>      // calculateTotalBudgetValue 지울수도..
        arrCurrencyData.reduce(
            (initValue, currencyData) =>
                (initValue += currencyData['type'] * currencyData['count']),
            0,
        );

    getRandomNumBtOneToNine = () => Math.floor(Math.random() * 9) + 1;

    getClickedCurrency = (clickedCurrencyType) =>
        this.budgetData.find(
            (currency) => currency.type === Number(clickedCurrencyType),
        );

    findCurrency = (arrCurrencyData, clickedCurrencyType) =>    // getClickedCurrency 지울수도..
        arrCurrencyData.find(
            (currency) => currency.type === Number(clickedCurrencyType),
        );

    // 지갑 지폐 단위 Decrease Count
    updateDecreaseCurrencyCnt = (clickedCurrencyType) => {
        this.clickedCurrency = this.getClickedCurrency(clickedCurrencyType);
        this.executeNotificationEvent(this.clickedCurrency);
        (this.clickedCurrency.count > 0) && this.clickedCurrency.count--;
    };

    executeNotificationEvent = () => {
        const notification = new Event('notify');
        document.dispatchEvent(notification);
    }

    updateDecreaseTotalBudget = (currencyType) => {
        if (this.totalBudget <= 0) return;
        this.totalBudget -= currencyType;
    };

    updateTotalBudget = () =>
        (this.totalBudget = this.calculateTotalValue(this.budgetData));

    // Progress - 돈 투입되었을 시, 투입금액 Update
    updateInsertMoneyData = (currencyType) => {
        const toBeUpdateItem = this.findCurrency(this.insertMoneyData, currencyType);
        toBeUpdateItem.count++;
    };

    // Progress - 돈 투입되었을 시, 총 투입금액 Update
    updateInsertTotal = () =>
        this.insertTotal = this.calculateTotalValue(this.insertMoneyData);

    // Progress - 반환버튼 클릭 시
    updateRecoverBudgetData = () => {
        this.budgetData.forEach((currency, i) => {
            const tmpCnt = currency.count += this.insertMoneyData[i].count;

            currency.setCurrencyCount(tmpCnt);
            this.insertMoneyData[i].setCurrencyCount(0);
        });
    };
}

export default WalletModel;