import React from "react";
import { Error, GoBack } from "../styles";

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
