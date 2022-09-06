import React from "react";
import Item from "./Item";
import { SearchOutputContainer } from "./SearchOutput.styles";

function SearchOutput({ data, setOutput }) {
  if (data.length < 1) return null;
  return (
    <SearchOutputContainer className={!data ? "hide" : "show"}>
      {data.map((res) => (
        <Item key={res.id} {...res} setOutput={setOutput} />
      ))}
    </SearchOutputContainer>
  );
}

export default SearchOutput;
