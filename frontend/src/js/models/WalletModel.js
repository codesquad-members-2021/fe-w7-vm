import Currency from '../utils/Currency.js';

class WalletModel {
    constructor() {
        this.currencyTypes = [10, 50, 100, 500, 1000, 5000, 10000];
        this.budgetData;
        this.totalBudget;
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
        const clickedCurrency = this.getClickedCurrency(clickedCurrencyType);
        (clickedCurrency.count > 0) && clickedCurrency.count--;
    };

    updateBudgetTotal = (currencyType) => {
        if (this.totalBudget <= 0) return;
        this.totalBudget -= currencyType;
    };
}

export default WalletModel;
