class Observable {
    constructor() {
        this._observers = [];
    }

    subscribe = (...observer) => this._observers.push(...observer);
    unsubscribe = (observer) => {
        this._observers = this._observers.filter(
            (subscriber) => subscriber !== observer,
        );
    };
    unsubscribeAll = () => (this._observers = []);

    notify = (data) => this._observers.forEach((observer) => observer(data));
}

export default Observable;