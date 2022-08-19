import React, { useState } from "react";
import { useEffect } from "react";
import { API_KEY } from "../../config";

import PageHandler from "../../components/page-handler/page-handler.component";
import "./popular.styles.css";
import Card from "../../components/cards-components/Movie-card/card.component";

export default function Popular() {
  const [topPopularMovies, setTopPopularMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => setTopPopularMovies(result.results));
  }, [page]);

  return (
    <>
    <h1 className="home-title">Popular Movies</h1>
    <PageHandler page={page} setPage={setPage}/>
    <div className="card-container">
      {topPopularMovies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
    </>
  );
}
