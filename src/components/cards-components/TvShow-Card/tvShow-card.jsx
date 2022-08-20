import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { TVShowIDContext } from "../../../contexts/tvShow-id.context";

import DateForm from "../../date-form/dateForm.component";
import { ReactComponent as StarLogo } from "../../../assets/star.svg";
import notFoundImg from "./../../../assets/not-found.png";
import { setCardImageWidth } from "../../../assets/functions";

import "./tvShow-card.css";


export default function TvShowCard({ movie }) {
  const { setID } = useContext(TVShowIDContext);
  
  const { name, first_air_date, vote_average, vote_count, id, poster_path } =
  movie;

  const handleCardClick = () => {setID([id,movie.name])};

  return (
    <Link to={`./${id}`} style={{ textDecoration: "none" }}>
      <div className="tvShow-card" onClick={handleCardClick}>
        <h4 className="tvShow-card-title">{name}</h4>
        {
        poster_path ? (
          <img
            className="tvShow-image"
            src={`https://image.tmdb.org/t/p/w${setCardImageWidth(
              window.innerWidth
            )}00${poster_path}`}
            alt={name}
          />
        ) : (
          <img
            className="tvShow-image"
            src={notFoundImg}
            alt={name}
            style={{ height: "200px" }}
          />
        )}
        <div className="tvShow-card-footer">
          <DateForm date={first_air_date} />

          <div className="tvShow-card-rating-container">
            <StarLogo className="tvShow-card-star-logo" />
            <div className="tvShow-card-notes-container">
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
