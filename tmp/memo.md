2021-03-25

```js
setView({ flag, insertedBalance }) {
    // 자판기 잔액에 반영
    // 현황판
    if (!flag) return;
    // this.walletModel.updateInsertedBalance(target.value);
    this.insertedBalanceHtml.value = `${this.walletModel.insertedBalance}원`;
    // 현재 자판기 잔액을 띄워주는데
    // 상품 구매 -> 현재 잔액 - 상품 가격 = 현재 자판기 잔액
    // 상품 가격의 정보를 가져오던지, 알고있던지
    // 그럼 얘도 프로덕트 모델을 구독?!! 난장판같고..
    // 그럼 여기서는 뭐 productModel에서 productList를 가지고 어쩌구 저쩌구를 해서 상품 가격을 알아와?
    // 그럼 옵저버를 왜써?
    this.printMessage("insert", target);
  }
  // walletModel 구독
  // productModel 구독
  // 현황판에 입금, 반환, 상품구매 현황을 출력할 수 있다.
  // args -> flag, insertedBalance, product.name을 갖고 있는 애도 들어와야

```
