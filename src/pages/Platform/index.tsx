import React, { useEffect, useRef, useState } from "react";
import TestStore from "@/component/andt/testStore";
import Tsrules from "@/component/Tsrules"


const Platform = () => {
  return (
    <div>
      <TestStore />
      <Tsrules />
    </div>
  );
};

export default Platform;
