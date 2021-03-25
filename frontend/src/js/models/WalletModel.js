import Observable from '../utils/Observable.js';
import Currency from '../utils/Currency.js';

class WalletModel extends Observable {
    constructor() {
        super();
        this.currencyTypes = [10, 50, 100, 500, 1000, 5000, 10000];
        this.budgetData;
        this.totalBudget;
    }

    createBudget = async () => {
        this.budgetData = this.currencyTypes.map((type) => {
            return new Currency(type, this.getRandomNumBtOneToNine());
        });
        this.totalBudget = await this.calculateTotalBudgetValue(
            this.budgetData,
        );
    };

    calculateTotalBudgetValue = () => {
        const total = this.budgetData.reduce(
            (initValue, currencyData) =>
                (initValue += currencyData['type'] * currencyData['count']),
            0,
        );
        return total;
    };

    getRandomNumBtOneToNine = () => Math.floor(Math.random() * 9) + 1;
}

export default WalletModel;
