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
  }

  changeToCurrencyUnit(val) {
    const totalAmount = val.target.value;

    function between(x, min, max = Infinity) {
      return x >= min && x < max;
    }

    const checkCurrentUnit = (totalAmount) => {
      const curProperty = this.walletModel.individualCurrencyUnit;
      if (between(totalAmount, 10000)) {
        const currentUnit = curProperty.find((v) => v.currencyUnit === 10000);
        currentUnit.count = ~~(totalAmount / 10000);
        checkCurrentUnit(totalAmount % 10000);
      } else if (between(totalAmount, 5000, 10000)) {
        const currentUnit = curProperty.find((v) => v.currencyUnit === 5000);
        currentUnit.count = ~~(totalAmount / 5000);
        checkCurrentUnit(totalAmount % 5000);
      } else if (between(totalAmount, 1000, 5000)) {
        const currentUnit = curProperty.find((v) => v.currencyUnit === 1000);
        currentUnit.count = ~~(totalAmount / 1000);
        checkCurrentUnit(totalAmount % 1000);
      } else if (between(totalAmount, 500, 1000)) {
        const currentUnit = curProperty.find((v) => v.currencyUnit === 500);
        currentUnit.count = ~~(totalAmount / 500);
        checkCurrentUnit(totalAmount % 500);
      } else if (between(totalAmount, 100, 500)) {
        const currentUnit = curProperty.find((v) => v.currencyUnit === 100);
        currentUnit.count = ~~(totalAmount / 100);
        checkCurrentUnit(totalAmount % 100);
      } else if (between(totalAmount, 50, 100)) {
        const currentUnit = curProperty.find((v) => v.currencyUnit === 50);
        currentUnit.count = ~~(totalAmount / 50);
        checkCurrentUnit(totalAmount % 50);
      } else if (between(totalAmount, 10, 50)) {
        const currentUnit = curProperty.find((v) => v.currencyUnit === 10);
        currentUnit.count = ~~(totalAmount / 10);
      }
    };

    checkCurrentUnit(totalAmount);
    // console.log(
    //   this.quotientFor10000,
    //   this.quotientFor5000,
    //   this.quotientFor1000
    // );
  }
}
