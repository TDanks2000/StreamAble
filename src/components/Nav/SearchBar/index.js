import React, { useRef, useState } from "react";
import { SearchBar, SearchButton, SearchContainer } from "./search.styles";
import { FaSearch } from "react-icons/fa";
import SearchOutput from "./SearchOutput";

import * as api from "../../../utils/api/api";
import { SearchOutputContainer } from "./SearchOutput/SearchOutput.styles";

function Search() {
  const SearchBarRef = useRef();
  const [animeOutput, setAnimeOutput] = useState([]);
  const [mangaOutput, setMangaOutput] = useState([]);
  const page = 1;

  const perPage = 3;

  const handleSubmit = (e) => {
    e.preventDefault();
    const SearchBarText = SearchBarRef.current.value;
    if (SearchBarText.length < 3) {
      setMangaOutput([]);
      setAnimeOutput([]);
      return false;
    }
    api
      .getSearch(SearchBarText, page, perPage)
      .then((res) => setAnimeOutput(res));
    api
      .getMangaSearch(SearchBarText, page, perPage)
      .then((res) => setMangaOutput(res.results));
  };

  const handleRemove = (e) => {
    setAnimeOutput([]);
    setMangaOutput([]);
    SearchBarRef.current.value = "";
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchBar type="search" ref={SearchBarRef} />
      <SearchButton>
        <FaSearch />
      </SearchButton>
      <SearchOutputContainer
        className={
          animeOutput.length < 1 && mangaOutput.length < 1 ? "hide" : "show"
        }
      >
        <SearchOutput data={animeOutput} onClick={handleRemove} />
        <SearchOutput data={mangaOutput} onClick={handleRemove} />
      </SearchOutputContainer>
    </SearchContainer>
  );
}

export default Search;
