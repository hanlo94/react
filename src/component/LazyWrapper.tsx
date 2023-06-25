import React from "react";
import { FC, lazy, Suspense } from "react";

interface LazyWrapperProps {
  /** 组件路径： 在 src/pages 目录下的页面路径，eg: /home => src/pages/home/index.tsx */
  path: string;
}
/**
 * 懒加载组件包装器
 * preload是告诉浏览器页面必定需要的资源，浏览器一定会加载这些资源。webpackPrefetch: true
   prefetch是告诉浏览器页面可能需要的资源，浏览器不一定会加载这些资源，会在空闲时加载。
 */
const LazyWrapper: FC<LazyWrapperProps> = ({ path }) => {
  const LazyComponent = lazy(() => import(`@/component/${path}` ));

  return (
    <Suspense fallback={<div>loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyWrapper;
