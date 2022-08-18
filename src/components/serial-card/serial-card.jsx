import React from "react";
import DateForm from "../date-form/dateForm.component";
import { ReactComponent as StarLogo } from "../../assets/star.svg";
import { Link } from "react-router-dom";

import notFoundImg from "./../../assets/not-found.png";

import "./serial-card.css";

export default function SerialCard({ movie, onClickCard }) {
  function setCardImageWidth(displayWidth) {
    if (displayWidth > 1500) return 3;
    else if (displayWidth > 1300 && displayWidth <= 1500) return 3;
    else if (displayWidth > 1000 && displayWidth <= 1300) return 3;
    else if (displayWidth <= 1000) return 2;
  }

  const handleCardClick = () => [onClickCard(movie)];

  const { name, first_air_date, vote_average, vote_count, id, poster_path } =
    movie;
  return (
    <Link to={`./${id}`} style={{ textDecoration: "none" }}>
      <div className="card" onClick={handleCardClick}>
        <h4 className="movie-title">{name}</h4>
        {
        poster_path ? (
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
    </Link>
  );
}
