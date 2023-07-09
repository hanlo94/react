import React, { lazy, Suspense, useState } from "react";
import "@/App.css";
import lessStyles from "./app.less";
import scssStyles from "./app.scss";
import stylStyles from "./app.styl";
import smallImg from "@/assets/imgs/仓储仓库.png";
// import memberList from "./test1.json";
import Decorators from "@/component/Decorators";

import LazyWrapper from "@/component/LazyWrapper";
// import './assets/fonts/iconfont.css' // for webpack only. Use '@/components/*.{ts,jsx}' for all components.'

const PreloadDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreloadDemo" */
      /*webpackPrefetch: true*/
      "@/component/PreloadDemo"
    )
);


function App() {
  const [show, setShow] = useState(false);
  const [count, setCounts] = useState("");
  const onChange = (e: any) => {
    setCounts(e.target.value);
  };

  // 点击事件中动态引入css, 设置show为true
  const handleOnClick = () => {
    import("@/App.css");
    setShow(true);
  };

  return (
    <div>
      <h2>webpack5-react-ts</h2>
      <div className={lessStyles["lessBox"]}>
        <div className={lessStyles["box"]}>哈哈哈哈lessBox</div>
        <img src={smallImg} alt="小于10kb的图片" />
      </div>
      <div className={scssStyles["scssBox"]}>
        <div className={scssStyles["box"]}>哈哈00scssBox</div>
      </div>
      <span className="iconfont icon-caomei"></span>
      <div className={stylStyles["stylBox"]}>
        <div className={stylStyles["box"]}>stylBox</div>
      </div>
      <Decorators></Decorators>
      <div>
        <p>受控组件1221</p>
        <input type="text" value={count} onChange={onChange} />
        <br />
        <p>非受控组件</p>
        <input type="text" />
      </div>
      <h2 onClick={handleOnClick}>展示</h2>
      {/* show为true时加载LazyDemo组件 */}
      {show && (
        <Suspense fallback={null}>
          <LazyWrapper path="LazyDemo" />
          <PreloadDemo />
        </Suspense>
      )}
    </div>
  );
}

export default App;
