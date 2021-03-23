export default class WalletModel {
  constructor() {
    this.quotientFor10000 = 0;
    this.quotientFor5000 = 0;
    this.quotientFor1000 = 0;
    this.quotientFor500 = 0;
    this.quotientFor100 = 0;
    this.quotientFor50 = 0;
    this.quotientFor10 = 0;
  }

  changeToCurrencyUnit(val) {
    const totalAmount = val.target.value;

    function between(x, min, max = Infinity) {
      return x >= min && x < max;
    }

    const checkCurrentUnit = (totalAmount) => {
      if (between(totalAmount, 10000)) {
        this.quotientFor10000 = ~~(totalAmount / 10000);
        checkCurrentUnit(totalAmount % 10000);
      } else if (between(totalAmount, 5000, 10000)) {
        this.quotientFor5000 = ~~(totalAmount / 5000);
        checkCurrentUnit(totalAmount % 5000);
      } else if (between(totalAmount, 1000, 5000)) {
        this.quotientFor1000 = ~~(totalAmount / 1000);
        checkCurrentUnit(totalAmount % 1000);
      } else if (between(totalAmount, 500, 1000)) {
        this.quotientFor500 = ~~(totalAmount / 500);
        checkCurrentUnit(totalAmount % 500);
      } else if (between(totalAmount, 100, 500)) {
        this.quotientFor100 = ~~(totalAmount / 100);
        checkCurrentUnit(totalAmount % 100);
      } else if (between(totalAmount, 50, 100)) {
        this.quotientFor50 = ~~(totalAmount / 50);
        checkCurrentUnit(totalAmount % 50);
      } else if (between(totalAmount, 10, 50)) {
        this.quotientFor10 = ~~(totalAmount / 10);
        checkCurrentUnit(totalAmount % 10);
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
