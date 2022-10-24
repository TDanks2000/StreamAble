import React, { useEffect } from "react";
import { FaClosedCaptioning, FaMicrophone } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./SubOrDubSelector.styles";

export const SubOrDubSelector = ({
  typeSubOrDub,
  subOrDub,
  setSubOrDub,
  typeDub,
}) => {
  let navigate = useNavigate();
  let { pathname } = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    const actualSubOrDub = subOrDub === false ? "sub" : "dub";
    const actualRSubOrDub = subOrDub === true ? "sub" : "dub";
    navigate(pathname.replace(actualSubOrDub, actualRSubOrDub), {
      replace: true,
    });
    setSubOrDub(typeSubOrDub ? false : true);
  };

  return (
    <Button onClick={handleClick}>
      {subOrDub === "sub" ? <FaClosedCaptioning /> : <FaMicrophone />}
    </Button>
  );
};
