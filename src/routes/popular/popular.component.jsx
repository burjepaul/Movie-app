import React, { useState, useEffect } from "react";
import { fetchDataAsync } from "../../helpers/functions";

import Card from "../../components/cards-components/Movie-card/card.component";
import PageHandler from "../../components/page-handler/page-handler.component";

import { API_KEY } from "../../config";
import "./popular.styles.css";

export default function Popular() {
  const [topPopularMovies, setTopPopularMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDataAsync(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      );
      setTopPopularMovies(result.results.splice(0, 18));
    };
    fetchData();
  }, [page]);

  return (
    <>
      <h1 className="popular-page-title">Popular Movies</h1>
      <PageHandler page={page} setPage={setPage} />
      <div className="popular-page-card-container">
        {topPopularMovies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
      <PageHandler page={page} setPage={setPage} />
    </>
  );
}
