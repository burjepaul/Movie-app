import React, { useContext, useState, useEffect } from "react";

import SeasonCard from "../../cards-components/Season-Card/season-card";

import { TVSeasonIDContext } from "../../../contexts/tvShow-seasonID.context";

import { API_KEY } from "../../../config";

import "./seasons-container.css"


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

  if (tvSeasons) {
    return (
        <div className="season-card-container">
          {tvSeasons.map((season) => (
            <SeasonCard season={season} key={season.id} onClickCard={handleTVShowPage} />
          ))}
        </div>
    );
  } else return;
}
