import { createContext } from "react";
import { configure } from 'mobx';

import PageTreeStore from './pageTree/index';
import RootStore from './RootStore';

configure({
    enforceActions: 'never',
    isolateGlobalState: true,
  });

export const Store = {
    pageTreeStore: new PageTreeStore(),
    userStore: RootStore.UserStore,
    counterStore: RootStore.CounterStore
};

export const storeContext = createContext(Store);//createContext用于创建一个上下文（Context）对象。上下文对象允许在组件树中跨层级传递数据
export const StoreProvider = storeContext.Provider; //组件

