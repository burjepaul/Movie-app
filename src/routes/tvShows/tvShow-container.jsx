import { React, useEffect, useState } from "react";
import { fetchDataAsync } from "../../helpers/functions";

import TvShowCard from "../../components/cards-components/TvShow-Card/tvShow-card";

import { API_KEY, DEFAULT_SEARCH_VALUE } from "../../config";

import "./tvShow-container.css";

export default function TvShow() {
  const [tvShows, setTvShows] = useState([]);
  const [searchShows, setSearchShow] = useState(DEFAULT_SEARCH_VALUE);

  const handleChange = (e) => {
    e.target.value.toLocaleLowerCase() === ""
      ? setSearchShow(DEFAULT_SEARCH_VALUE)
      : setSearchShow(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDataAsync(
        `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${searchShows}&include_adult=false`
      );
      setTvShows(
        result.results
          .sort((a, b) => b.popularity - a.popularity)
          .filter((movie) => movie.poster_path)
          .splice(0, 6)
      );
    };
    fetchData();
  }, [searchShows]);

  return (
    <div>
      <h1 className="tvShow-page-title">Tv Shows</h1>
      <input
        type="text"
        className="search-box"
        placeholder="search by name"
        onChange={handleChange}
      ></input>
      <div className="tvShow-page-title-card-container">
        {tvShows.map((serial) => (
          <TvShowCard
            movie={serial}
            key={serial.id}
          />
        ))}
      </div>
    </div>
  );
}
