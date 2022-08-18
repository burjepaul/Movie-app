import React from "react";
import DateForm from "../date-form/dateForm.component";

import "./TVSeasonCard.css";
import notFoundImg from "./../../assets/not-found.png";

function setCardImageWidth(displayWidth) {
  if (displayWidth > 1500) return 3;
  else if (displayWidth > 1300 && displayWidth <= 1500) return 3;
  else if (displayWidth > 1000 && displayWidth <= 1300) return 3;
  else if (displayWidth <= 1000) return 2;
}

export default function TVSeasonCard({ season }) {
  const { poster_path, name, air_date, episode_count, overview } = season;

  return (
    <div className="season-card">
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
  );
}
