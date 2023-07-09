import { makeAutoObservable } from 'mobx';
import UserStore from './common/UserStore';
import CounterStore from './common/CounterStore'

class RootStore {
    /**
     * 用户信息
     */
    UserStore;
    CounterStore;
  
    constructor() {
      makeAutoObservable(this);
      this.UserStore = new UserStore(this);
      this.CounterStore = new CounterStore(this);
    }
  }
  export default new RootStore();