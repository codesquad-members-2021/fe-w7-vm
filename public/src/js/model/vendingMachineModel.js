import Observable from '../observer'

class VendingModel extends Observable {
  constructor(food) {
    super()
    this.food = food
    this.vendingMoney = 0
    this.vendingStatus = []
  }
  getFood() {
    return this.food
  }
  setFood() {}
  getFoodItem(food) {
    for (const item of this.food) {
      if (item.name === food) return item
    }
  }
  getVendingMoney() {
    return this.vendingMoney
  }
  setVendingMoney(money) {
    this.vendingMoney = money
  }
  getVendingStatus() {
    return this.vendingStatus
  }
  setVendingStatus(status) {
    this.vendingStatus.push(status)
  }
  clearVendingStatus() {
    this.vendingStatus = []
  }
}

export default VendingModel
