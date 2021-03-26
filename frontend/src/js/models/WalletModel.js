import Currency from '../utils/Currency.js';

class WalletModel {
    constructor() {
        this.currencyTypes = [10, 50, 100, 500, 1000, 5000, 10000];
        this.budgetData;
        this.totalBudget;
    }

    createBudget = () => {
        this.budgetData = this.currencyTypes.map((type) => {
            return new Currency(type, this.getRandomNumBtOneToNine());
        });
        this.calculateTotalBudgetValue(this.budgetData);
    };

    calculateTotalBudgetValue = () => {
        this.totalBudget = this.budgetData.reduce(
            (initValue, currencyData) =>
                (initValue += currencyData['type'] * currencyData['count']),
            0,
        );
    };

    updateCurrenyCount = () => {
        // view의 decreaseCount
    };

    updateBudgetTotal = (currencyType) =>{
        if (this.totalBudget <= 0) return;
        (this.totalBudget -= currencyType);
    };

    getRandomNumBtOneToNine = () => Math.floor(Math.random() * 9) + 1;
}

export default WalletModel;
