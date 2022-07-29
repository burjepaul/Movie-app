import React, { useState, useContext } from "react";

import { ReactComponent as StarLogo } from "../../assets/star.svg";
import { ReactComponent as BookmarkFull } from "../../assets/bookmark-fill.svg";
import { ReactComponent as BookmarkEmpty } from "../../assets/bookmark-empty.svg";
import DateForm from "../date-form/dateForm.component";
import { WatchlistContext } from "../../contexts/watchlist.context";

import "./front-card.styles.css";
import notFoundImg from "./../../assets/not-found.png";

function setCardImageWidth(displayWidth) {
  if (displayWidth > 1500) return 3;
  else if (displayWidth > 1300 && displayWidth <= 1500) return 3;
  else if (displayWidth > 1000 && displayWidth <= 1300) return 3;
  else if (displayWidth <= 1000) return 2;
}

const checkIfInWatchlist = function (list, movieId) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === movieId) return true;
  }
  return false;
};

export default function FrontCard({ movie, onClickCard }) {
  const { watchlist, setWatchlist } = useContext(WatchlistContext);
  const [isBookmarked, setIsBookmarked] = useState(
    checkIfInWatchlist(watchlist, movie.id)
  );

  const handleBookamrkToggle = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleWatchlist = () => {
    if (!isBookmarked) {
      setWatchlist([...watchlist, movie]);
    } else {
      setWatchlist(
        watchlist.filter((watchlistMovie) => watchlistMovie.id !== movie.id)
      );
    }
    console.log(watchlist);
  };

  const bookmarkHandler = () => {
    handleBookamrkToggle();
    handleWatchlist();
  };

  const handleBackOfTheCard = () => {
    onClickCard(movie)
  };

  const { title, poster_path, vote_average, vote_count, release_date } = movie;

  return (
    <div className="card">
      <h4 className="movie-title" onClick={handleBackOfTheCard}>
        {title}
      </h4>
      {isBookmarked ? (
        <BookmarkFull className="bookmark-logo" onClick={bookmarkHandler} />
      ) : (
        <BookmarkEmpty className="bookmark-logo" onClick={bookmarkHandler} />
      )}

      {poster_path ? (
        <img
          onClick={handleBackOfTheCard}
          className="movie-image"
          src={`https://image.tmdb.org/t/p/w${setCardImageWidth(
            window.innerWidth
          )}00${poster_path}`}
          alt={title}
        />
      ) : (
        <img
          onClick={handleBackOfTheCard}
          className="movie-image"
          src={notFoundImg}
          alt={title}
          style={{ height: "200px" }}
        />
      )}
      <div className="card-footer" onClick={handleBackOfTheCard}>
        <DateForm date={release_date} />

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
