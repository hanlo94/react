import { makeAutoObservable, runInAction } from "mobx";

export default class UserStore {
  rootStore;
  count = 0;
  userInfo = null;

  constructor(rootStores) {
    
    this.rootStore = rootStores;
    makeAutoObservable(this);
  }
  increment = () => {
    const {CounterStore} = this.rootStore
    console.log(CounterStore.count1, 'b') 
    this.count++;
  };

  decrement() {
    this.count--;
  }
}
