import React from "react";
import { useState, useEffect } from "react";
import { API_KEY } from "../../config";
import TVSeasonCard from "../TVSeasonCard/TVSeasonCard";

export default function TvSerialSeasons({ movieId }) {
  const [tvSeasons, setTvSeasons] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${movieId}?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => setTvSeasons(result.seasons));
  }, [movieId]);

  console.log(tvSeasons);
  if (tvSeasons) {
    return (
        <div className="card-container">
          {tvSeasons.map((season) => (
            <TVSeasonCard season={season} key={season.id} />
          ))}
        </div>
    );
  } else return;
}
