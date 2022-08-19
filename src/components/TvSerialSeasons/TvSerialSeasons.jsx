import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { API_KEY } from "../../config";
import TVSeasonCard from "../TVSeasonCard/TVSeasonCard";
import { TVSeasonIDContext } from "../../contexts/tvShow-seasonID.context";

export default function TvSerialSeasons({ serialId }) {
  const [tvSeasons, setTvSeasons] = useState();
  const {setSeasonNo} = useContext(TVSeasonIDContext)

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${serialId}?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => setTvSeasons(result.seasons.filter(season => season.name !== 'Specials')));
  }, [serialId]);

  const handleTVShowPage = (season) => {
    setSeasonNo(+season.name.slice(-1));
  }

  console.log(tvSeasons);
  if (tvSeasons) {
    return (
        <div className="card-container">
          {tvSeasons.map((season) => (
            <TVSeasonCard season={season} key={season.id} onClickCard={handleTVShowPage} />
          ))}
        </div>
    );
  } else return;
}
