import React, { useState } from "react";

import { ReactComponent as StarLogo } from "../../assets/star.svg";
import { ReactComponent as BookmarkFull } from "../../assets/bookmark-fill.svg";
import { ReactComponent as BookmarkEmpty } from "../../assets/bookmark-empty.svg";

import "./card.styles.css";
import notFoundImg from "./../../assets/not-found.png";

function setCardImageWidth(displayWidth) {
  if (displayWidth > 1500) return 5;
  else if (displayWidth > 1300 && displayWidth <= 1500) return 4;
  else if (displayWidth > 1000 && displayWidth <= 1300) return 3;
  else if (displayWidth <= 1000) return 2;
}


export default function Card({ movie }) {
  const {  title, backdrop_path, vote_average, vote_count, release_date } =
    movie;


  return (
    <div className="card">
      <h4 className="movie-title">{title}</h4>
      <BookmarkEmpty className="bookmark-logo empty" />

      {backdrop_path ? (
        <img
          className="movie-image"
          src={`https://image.tmdb.org/t/p/w${setCardImageWidth(
            window.innerWidth
          )}00${backdrop_path}`}
          alt={title}
        />
      ) : (
        <img
          className="movie-image"
          src={notFoundImg}
          alt={title}
          style={{ height: "200px" }}
        />
      )}
      <div className="card-footer">
        <div className="release-date">
          <span>{release_date}</span>
        </div>
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
