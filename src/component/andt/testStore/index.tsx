import React, { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import {useStore}  from "@/hooks";

const TestStore: React.FC<any> = (props) => {
  const {
    userStore: { count, increment },
  } = useStore();

  const handleIncrement = () => {
    increment();
  };

  return (
    <>
      <div className="container">Count: {count}</div>
      <button onClick={handleIncrement}>加加</button>
    </>
  );
};

export default observer(TestStore);
