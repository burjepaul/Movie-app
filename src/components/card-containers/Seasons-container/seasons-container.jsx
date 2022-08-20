import React, { useState, useEffect } from "react";

import SeasonCard from "../../cards-components/Season-Card/season-card";

import { API_KEY } from "../../../config";
import { fetchDataAsync } from "../../../assets/functions";

import "./seasons-container.css";

export default function TvSerialSeasons({ serialId }) {
  const [tvSeasons, setTvSeasons] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDataAsync(
        `https://api.themoviedb.org/3/tv/${serialId}?api_key=${API_KEY}&language=en-US`
      );

      setTvSeasons(
        result.seasons.filter((season) => season.name !== "Specials")
      );
    };
    fetchData();
  }, [serialId]);

  if (tvSeasons) {
    return (
      <div className="season-card-container">
        {tvSeasons.map((season) => (
          <SeasonCard
            season={season}
            key={season.id}
          />
        ))}
      </div>
    );
  } else return;
}
