import React from "react";
import { useState, useEffect } from "react";

import Card from "../card/card.component";

import { API_KEY } from "../../config";
import "./card-container.css";

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
          result.results.sort((a, b) => b.popularity - a.popularity)
        )
      );
  }, [searchField]);

  const handleBackOfTheCard = (movie) => {
    console.log(movie)
  }

  if (popularMovies.length !== 0) {
    return (
      <div className="card-container">
        {popularMovies.map((movie) => (
          <Card key={movie.id} movie={movie} onClickCard={handleBackOfTheCard}/>
        ))}
      </div>
    );
  } else
    return (
      <h1 className="empty-message">No movie with title "{searchField}"</h1>
    );
};

export default CardContainer;
