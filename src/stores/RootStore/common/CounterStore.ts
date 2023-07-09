// CounterStore.js
import { makeAutoObservable, computed } from 'mobx';

class CounterStore {
  rootStore;
  count1 = 0;

  constructor(rootStores) {
    this.rootStore = rootStores;
    makeAutoObservable(this);
  }

  increment() {
    this.count1++;
  }

  decrement() {
    this.count1--;
  }

  get doubledCount() {
    return this.count1 * 2;
  }
}

export default CounterStore;
