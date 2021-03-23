export default class WalletModel {
  constructor() {
    this.individualCurrencyUnit = [
      { currencyUnit: 10000, count: 0 },
      { currencyUnit: 5000, count: 0 },
      { currencyUnit: 1000, count: 0 },
      { currencyUnit: 500, count: 0 },
      { currencyUnit: 100, count: 0 },
      { currencyUnit: 50, count: 0 },
      { currencyUnit: 10, count: 0 },
    ];
    this.totalAmount = 0;
  }

  changeToCurrencyUnit(val) {
    this.totalAmount = val.target.value;
    const currencyUnits = [10000, 5000, 1000, 500, 100, 50, 10];

    const checkCurrentUnit = () => {
      const curProperty = this.walletModel.individualCurrencyUnit;
      let amount = this.totalAmount;
      currencyUnits.map((cur) => {
        const currentUnit = curProperty.find((v) => v.currencyUnit === cur);
        currentUnit.count = ~~(amount / cur);
        amount -= currentUnit.count * cur;
      });
    };
    checkCurrentUnit();
  }

  deductAmount(e) {
    const targetUnit = this.individualCurrencyUnit.find(
      (v) => v.currencyUnit === parseInt(e.target.parentNode.className)
    );
    targetUnit.count--;
  }
}
