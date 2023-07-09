import React, { lazy, Suspense, useState } from "react";
import { Provider } from 'mobx-react';
import "./App.less";
import EventEmitter from '@/utils/eventBus';
import Platform from "./pages/Platform";
import { Store as stores } from "./stores";


function App() {
  const [show, setShow] = useState(false);
  const [count, setCounts] = useState("");

  // window.globalEventEmitter = EventEmitter

  return (
    <Provider {...stores}>
      <Platform></Platform>
    </Provider>
  );
}

export default App;
