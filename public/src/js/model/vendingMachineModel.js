import Observable from '../observer'

class VendingModel extends Observable {
  constructor(food) {
    super()
    this.food = food
    this.vendingMoney = 10000
    this.vendingStatus = ['500원이 투입됐음', '500원이 투입됐음']
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
  setVendingMoney() {}
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
