import React from "react";
import Item from "./Item";

function SearchOutput({ data, setOutput, type }) {
  if (data.length < 1) return null;
  return data.map((res) => (
    <Item key={res.id} {...res} setOutput={setOutput} />
  ));
}

export default SearchOutput;
