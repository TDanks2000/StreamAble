import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./SubOrDubSelector.styles";

export const SubOrDubSelector = ({ subOrDub, setSubOrDub, typeDub }) => {
  let navigate = useNavigate();
  let { pathname } = useLocation();
  const handleClick = (e) => {
    e.preventDefault();
    const actualSubOrDub = subOrDub === false ? "sub" : "dub";
    const actualRSubOrDub = subOrDub === true ? "sub" : "dub";
    navigate(pathname.replace(actualSubOrDub, actualRSubOrDub), {
      replace: true,
    });
    setSubOrDub((prevState) => !prevState);
  };

  return (
    <>
      <Button onClick={handleClick}>
        {subOrDub === false ? "sub" : "dub"}
      </Button>
    </>
  );
};
