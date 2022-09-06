import React from "react";
import { Button } from "./SubOrDubSelector.styles";

export const SubOrDubSelector = ({ subOrDub, setSubOrDub, typeDub }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setSubOrDub((prevState) => !prevState);
    setStorage(!subOrDub);
  };

  const setStorage = (toSet) => {
    return localStorage.setItem("typeDub", toSet);
  };

  return (
    <>
      <Button onClick={handleClick}>
        {subOrDub === false ? "sub" : "dub"}
      </Button>
    </>
  );
};
