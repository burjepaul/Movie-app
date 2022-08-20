import React, {useState} from "react";

import { DEFAULT_SEARCH_VALUE } from "../../config";


import "./home.styles.css";
import CardContainer from "../../components/card-containers/Movie-container/card-container.component";

export default function Home() {
  const [searchField, setSearchField] = useState(DEFAULT_SEARCH_VALUE);

  const onSearchHandler = (event) => {
    event.target.value.toLocaleLowerCase() === ""
      ? setSearchField(DEFAULT_SEARCH_VALUE)
      : setSearchField(event.target.value.toLocaleLowerCase());
  };

  return (
    <div className="App">
      <h1 className="home-title">Movies</h1>
      <input
        type="text"
        className="search-box"
        placeholder="search by name"
        onChange={onSearchHandler}
      ></input>
      <CardContainer searchField={searchField} />
    </div>
  );
}
