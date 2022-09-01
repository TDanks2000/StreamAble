import React from "react";
import { Error, GoBack } from "../styles";

console.log(window.location.pathname.split("/"));
export const NoMatch = () => (
  <>
    <Error>
      This url {window.location.pathname.split("/").splice(1).join(" ")} does
      not exist
    </Error>
    <Error></Error>
    <GoBack />
  </>
);
