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
    this.notify({ target, ...this });
  }
  // -> walletView 만 구독

  // 지갑 총액 갱신
  updateBalance(balance) {
    this.balance += balance;
  }

  updateInsertedBalance(value) {
    // value말고 다른거 받으면?
    this.insertedBalance += value;
    this.notify({ flag: true, ...this });

    // ->  walletView가 구독: 지갑에서 돈이 빠져나가는 변화 때문에
    //      -> setView를 해주는 경우: 반환 버튼을 눌러서 돈이 합산될 때  : notify insertedBalance
    // -> productView가 구독: balance보다 가격 낮은 상품을 활성화 해줘야 하니까 > 상품 구매시 상품 가격만큼 돈을 차감해야 하니까
    //      -> notify insertedBalance
    // -> processView가 구독:
    //   1. dom을 그려줘야 하고
    //       -> notify insertedBalance
    //

    // 2021-03-25 1:11
    // to-do
    // 반환버튼 기능
    // 입금 시 상품 활성화
    // 상품 구매시, 자판기 잔액 변경, 현황판 로그 출력
    // observer 개선, refactoring, setTimeout 구현

    // notify
    // 1. 말그대로 상태가 변경할 때 알림
    // 2. 의도한 부분만 바꿔야 할때
    // -> 옵저버에게 모든 정보를 가져다주고, 옵저버블은 필요한 것만 갖다 씀
  }
}
