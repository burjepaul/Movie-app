import React from "react";
import DateForm from "../date-form/dateForm.component";

import "./TVSeasonCard.css";
import notFoundImg from "./../../assets/not-found.png";
import { Link } from "react-router-dom";

function setCardImageWidth(displayWidth) {
  if (displayWidth > 1500) return 3;
  else if (displayWidth > 1300 && displayWidth <= 1500) return 3;
  else if (displayWidth > 1000 && displayWidth <= 1300) return 3;
  else if (displayWidth <= 1000) return 2;
}


export default function TVSeasonCard({ season, onClickCard }) {
  const { poster_path, name, air_date, episode_count, overview } = season;

  const handleCardClick = () => [onClickCard(season)];

  return (
    <Link to={`./${+name.slice(-1)}`} style={{ textDecoration: "none" }}>
      <div className="season-card" onClick={handleCardClick}>
        <h3 className="season-title">{name}</h3>
        <p className="episode_count">No of Episodes {episode_count}</p>
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
