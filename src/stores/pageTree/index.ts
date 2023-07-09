import { makeAutoObservable, runInAction } from 'mobx';
//runInAction 是 MobX 中用于处理异步操作的函数。在异步操作中，直接修改可观察状态可能会导致警告或错误。为了避免这种情况，可以使用 runInAction 函数来确保在动作（action）中修改状态。

export default class pageTreeStore {
    selecteKey = ''
    constructor() {
        makeAutoObservable(this)
    }

    async fetchData() {
        try {
          const response = await fetch('api/data');
          const result = await response.json();
    
          runInAction(() => {
            this.selecteKey = result;
          });
        } catch (error) {
          // 处理错误
        }
      }

      deleteItem = (callback) => {
        
      };

}


