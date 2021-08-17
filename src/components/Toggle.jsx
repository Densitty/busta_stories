import React from "react";
import { useGlobalContext } from "../utils/Context";

const Toggle = () => {
  const dataFromContext = useGlobalContext();
  const { navState, openNav } = dataFromContext;

  return (
    <div
      className={navState ? "toggle-open" : "toggle-close"}
      onClick={openNav}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Toggle;
