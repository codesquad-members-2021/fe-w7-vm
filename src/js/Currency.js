export default class Currency {
  constructor(value = 0, count = 0, index) {
    this.value = value;
    this.count = count;
    this.index = index;
  }
  setCount(count) {
    this.count += count;
  }
}
