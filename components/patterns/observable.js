class Observable {

    constructor() {
        this.observer = [];
    }
    subscribe(func) {
        this.observer.push(func);
    }
    unsubscribe(func) {
        this.observer.filter(subscribe => subscribe !== func);
    }
    unsubscribeAll() {
        this.observer = [];
    }
    notify() {
        this.observer.forEach(observer => observer());
    }
}

export default new Observable();