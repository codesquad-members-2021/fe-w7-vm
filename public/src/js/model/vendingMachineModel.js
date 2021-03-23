import Observable from '../observer';

class VendingModel extends Observable {
   constructor(food) {
      super();
      this.food = food;
   }
   notify(data) {
      this._observers.forEach((observer) => {
         observer();
      });
   }
}

export default VendingModel;