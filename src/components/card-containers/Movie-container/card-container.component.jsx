import { React, useState, useEffect } from "react";

import Card from "../../cards-components/Movie-card/card.component";

import { API_KEY,FETCH_TIME_REDUCER } from "../../../config";

import "./card-container.css";
import { fetchDataAsync } from "../../../helpers/functions";

const CardContainer = ({ searchField }) => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchReducer = setTimeout(() => {
      const fetchData = async () => {
        const result = await fetchDataAsync(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchField}`
        );
        setPopularMovies(
          result.results.slice(0, 6).sort((a, b) => b.popularity - a.popularity)
        );
      };
      fetchData();
    }, FETCH_TIME_REDUCER);

    return ()=> {
      clearTimeout(fetchReducer)
    }
  }, [searchField]);

  if (popularMovies.length !== 0) {
    return (
      <div className="card-container">
        {popularMovies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    );
  } else
    return (
      <h1 className="empty-message">No movie with title "{searchField}"</h1>
    );
};

export default CardContainer;
