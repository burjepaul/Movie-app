import { React, useEffect, useState, useContext } from "react";

import TvShowCard from "../../components/cards-components/TvShow-Card/tvShow-card";

import { API_KEY, DEFAULT_SEARCH_VALUE } from "../../config";

import { TVShowIDContext } from "../../contexts/tvShow-id.context";

import "./tvShow-container.css"

export default function TvShow() {
  const [tvShows, setTvShows] = useState([]);
  const [searchShows, setSearchShow] = useState(DEFAULT_SEARCH_VALUE);
  const {setID} = useContext(TVShowIDContext)

  const handleChange = (e) => {
    e.target.value.toLocaleLowerCase() === ''
      ? setSearchShow(DEFAULT_SEARCH_VALUE)
      : setSearchShow(e.target.value);
  };

  const handleTVShowPage = (movie) => {
    setID(movie.id);
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${searchShows}&include_adult=false`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => setTvShows(result.results.sort((a, b) => b.popularity - a.popularity).filter( movie => movie.poster_path ).splice(0,6)));
  }, [searchShows]);

  return (
    <div >
      <h1 className="tvShow-page-title">Tv Shows</h1>
      <input type="text" className="search-box" placeholder="search by name" onChange={handleChange}></input>
      <div className="tvShow-page-title-card-container">
        {tvShows.map((serial) => (
          <TvShowCard movie={serial} key={serial.id} onClickCard={handleTVShowPage}/>
        ))}
      </div>
    </div>
  );
}
