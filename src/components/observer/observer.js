class Observer {
  constructor() {
    this.walletButtonObservers = [];
    this.returnButtonObservers = [];
  }

  subscribe(observers, fn) {
    observers.push(fn);
  }

  unsubscribe(observers, fnToRemove) {
    observers.filter((fn) => {
      if (fn !== fnToRemove) fn;
    });
  }

  fire(observers, data) {
    observers.forEach((fn) => fn(data));
  }
}

const observer = new Observer();

export { observer };
