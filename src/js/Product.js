// 0: impossible to buy
// 1: possible to buy

export default class Product {
  constructor(prod, index) {
    this.name = prod.name;
    this.price = prod.price;
    this.count = prod.count;
    this.status = 0;
    this.index = index;
  }

  isEmpty() {
    return this.count === 0;
  }

  setCount(newCount) {
    this.count = newCount;
  }

  setSelf(self) {
    this.self = self;
  }
}
