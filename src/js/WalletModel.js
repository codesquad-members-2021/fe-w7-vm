import Observable from "./Observable.js";
import { getRandom, defaultValue } from "./utils.js";
import Currency from "./Currency.js";

export default class WalletModel extends Observable {
  constructor() {
    super();
    this.TYPES = [10, 50, 100, 500, 1000, 5000, 10000];
    this.currencies = this.TYPES.map((curr, i) => new Currency(curr, 0, i));
    this.balance = getRandom(defaultValue);
    this.insertedBalance = 0;
    this.init();
  }

  init() {
    this.distributeCurrency();
  }

  // 첫 지갑 총액 - 화폐 랜덤 분배
  distributeCurrency() {
    let balance = this.balance;
    while (balance > 0) {
      const randomCount = parseInt(Math.random() * this.currencies.length);
      const target = this.currencies[randomCount];
      if (target.value > balance) continue;
      balance -= target.value;
      target.setCount(+1);
    }
  }

  // 반환 후 합산된 지갑 총액 기준으로 큰 화폐 단위 우선 분배 - 화폐 개수 갱신
  updateCurrencies(balance) {
    this.currencies.reduceRight((arr, cur) => {
      const currencyCount = parseInt(balance / cur.value);
      if (currencyCount) {
        balance -= cur.value * currencyCount;
        this.updateCurrency(cur, currencyCount);
      }
    });
  }

  // 화폐 개수 갱신, 총액 값 갱신
  updateCurrency(target, count) {
    target.count += count;
    this.updateBalance(target.value * count);
    this.notify({ target, balance: this.balance });
  }

  // 지갑 총액 갱신
  updateBalance(balance) {
    this.balance += balance;
  }

  updateInsertedBalance(value) {
    this.insertedBalance += value;
    this.notify({ insertedBalance: this.insertedBalance });

    // 2021-03-25 1:11
    // to-do
    // 반환버튼 기능
    // 입금 시 상품 활성화
    // 상품 구매시, 자판기 잔액 변경, 현황판 로그 출력
    // observer 개선, refactoring, setTimeout 구현
  }
}
