import { makeAutoObservable, runInAction } from 'mobx';
//runInAction 是 MobX 中用于处理异步操作的函数。在异步操作中，直接修改可观察状态可能会导致警告或错误。为了避免这种情况，可以使用 runInAction 函数来确保在动作（action）中修改状态。
//makeAutoObservable 用于自动将类实例中的属性和方法转换为可观察的状态。
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