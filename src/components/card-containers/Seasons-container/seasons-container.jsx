import React, { useState, useEffect } from "react";

import SeasonCard from "../../cards-components/Season-Card/season-card";

import { API_KEY } from "../../../config";
import { fetchDataAsync } from "../../../helpers/functions";

import { ReactComponent as BackArrowLogo } from "../../../assets/back-arrow.svg";

import "./seasons-container.css";
import { useNavigate } from "react-router-dom";

export default function TvSerialSeasons({ serialId, serialName }) {
  const [tvSeasons, setTvSeasons] = useState();

  const navigate = useNavigate()

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
      <>
        <div className="seasons-container-header">
          <BackArrowLogo className="seasons-container-arrow-logo" onClick={() => navigate(-1)}/>
          <h1 className="season-page-title">{serialName}</h1>
        </div>
        <div className="season-card-container">
          {tvSeasons.map((season) => (
            <SeasonCard season={season} key={season.id} />
          ))}
        </div>
      </>
    );
  } else return;
}
