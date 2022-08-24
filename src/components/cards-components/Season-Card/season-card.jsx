import React from "react";
import { Link } from "react-router-dom";

import DateForm from "../../date-form/dateForm.component";
import notFoundImg from "./../../../assets/not-found.png";
import { setCardImageWidth } from "../../../helpers/functions";

import "./season-card.css";
import { useContext } from "react";
import { TVSeasonIDContext } from "../../../contexts/tvShow-seasonID.context";

export default function SeasonCard({ season }) {
  const { poster_path, name, air_date, episode_count, overview } = season;
  const { setSeasonNo } = useContext(TVSeasonIDContext);

  const handleCardClick = () => [
    setSeasonNo(+season.name.slice(-1)),
  ];

  return (
    <Link to={`./${+name.slice(-1)}`} style={{ textDecoration: "none" }}>
      <div className="season-card" onClick={handleCardClick}>
        <h3 className="season-title">{name}</h3>
        <p className="season-episode-number">No of Episodes {episode_count}</p>
        {poster_path ? (
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w${setCardImageWidth(
              window.innerWidth
            )}00${poster_path}`}
            alt={name}
          />
        ) : (
          <img
            className="movie-image"
            src={notFoundImg}
            alt={name}
            style={{ height: "200px" }}
          />
        )}
        <div className="card-footer">
          <DateForm date={air_date} />
        </div>
        {overview ? (
          <p className="season-overview"> &nbsp; &nbsp; &nbsp; {overview}</p>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
}
