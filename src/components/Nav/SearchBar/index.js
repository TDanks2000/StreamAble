import React, { useState } from "react";
import { SearchBar, SearchButton, SearchContainer } from "./search.styles";
import { FaSearch } from "react-icons/fa";
import SearchOutput from "./SearchOutput";

import * as api from "../../../utils/api/api";

function Search() {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length < 3) return setOutput([]);
    api.getSearch({ search: value, limit: 7 }).then((res) => setOutput(res));
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchBar type="search" value={value} onChange={handleChange} />
      <SearchButton>
        <FaSearch />
      </SearchButton>
      <SearchOutput data={output} setOutput={setOutput} />
    </SearchContainer>
  );
}

export default Search;
