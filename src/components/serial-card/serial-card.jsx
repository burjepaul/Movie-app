import React from "react";
import DateForm from "../date-form/dateForm.component";
import { ReactComponent as StarLogo } from "../../assets/star.svg";

export default function SerialCard({ movie }) {
  function setCardImageWidth(displayWidth) {
    if (displayWidth > 1500) return 3;
    else if (displayWidth > 1300 && displayWidth <= 1500) return 3;
    else if (displayWidth > 1000 && displayWidth <= 1300) return 3;
    else if (displayWidth <= 1000) return 2;
  }

  const { name, first_air_date, vote_average, vote_count } = movie;
  return (
    <div className="card">
      <h4 className="movie-title">{name}</h4>
      <img
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w${setCardImageWidth(
            window.innerWidth
          )}00${movie.poster_path}`}
        alt={movie.name}
      />
      <div className="card-footer">
        <DateForm date={first_air_date} />

        <div className="rating-container">
          <StarLogo className="star-logo" />
          <div className="notes-container">
            <span>{vote_average} / 10</span>
            <br></br>
            <span>
              {vote_count / 1000 < 1
                ? vote_count
                : Math.floor(vote_count / 1000) + "K"}{" "}
              votes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
