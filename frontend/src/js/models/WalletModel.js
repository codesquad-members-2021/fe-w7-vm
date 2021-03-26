import Currency from '../utils/Currency.js';

class WalletModel {
    constructor() {
        this.currencyTypes = [10, 50, 100, 500, 1000, 5000, 10000];
        this.budgetData;
        this.totalBudget;
        this.clickedCurrency;
    }

    // 지갑 지폐 단위 및 잔여금액 데이터 생성
    createBudget = () => {
        this.budgetData = this.currencyTypes.map(
            (type) => new Currency(type, this.getRandomNumBtOneToNine()),
        );
        this.totalBudget = this.calculateTotalBudgetValue(this.budgetData);
    };

    calculateTotalBudgetValue = () =>
        this.budgetData.reduce(
            (initValue, currencyData) =>
                (initValue += currencyData['type'] * currencyData['count']),
            0,
        );

    getRandomNumBtOneToNine = () => Math.floor(Math.random() * 9) + 1;

    getClickedCurrency = (clickedCurrencyType) =>
        this.budgetData.find(
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

    updateBudgetTotal = (currencyType) => {
        if (this.totalBudget <= 0) return;
        this.totalBudget -= currencyType;
    };
}

export default WalletModel;
