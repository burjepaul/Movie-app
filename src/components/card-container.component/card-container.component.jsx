import React from "react";
import { useState, useEffect } from "react";

import Card from "../card/card.component";

import "./card-container.css";
import { API_KEY } from "../../config";

const CardContainer = ({ searchField }) => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchField}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) =>
        setPopularMovies(
          result.results.slice(0, 12).sort((a, b) => b.popularity - a.popularity)
        )
      );
  }, [searchField]);


  if (popularMovies.length !== 0) {
    return (
      <div className="card-container">
        {popularMovies.map((movie) => (
          <Card movie={movie} key={movie.id}/>
        ))}
      </div>
    );
  } else
    return (
      <h1 className="empty-message">No movie with title "{searchField}"</h1>
    );
};

export default CardContainer;
