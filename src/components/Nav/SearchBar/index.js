import React, { useRef, useState } from "react";
import { SearchBar, SearchButton, SearchContainer } from "./search.styles";
import { FaSearch } from "react-icons/fa";
import SearchOutput from "./SearchOutput";

import * as api from "../../../utils/api/api";

function Search() {
  const SearchBarRef = useRef();
  const [output, setOutput] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const SearchBarText = SearchBarRef.current.value;
    if (SearchBarText.length < 3) return setOutput([]);
    api.getSearch(SearchBarText, 1, 7).then((res) => setOutput(res));
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchBar type="search" ref={SearchBarRef} />
      <SearchButton>
        <FaSearch />
      </SearchButton>
      <SearchOutput data={output} setOutput={setOutput} />
    </SearchContainer>
  );
}

export default Search;
