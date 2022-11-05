import React from "react";
import Item from "./Item";

function SearchOutput({ data, onClick, type }) {
  if (data.length < 1) return null;
  return data.map((res) => <Item key={res.id} {...res} onClick={onClick} />);
}

export default SearchOutput;
