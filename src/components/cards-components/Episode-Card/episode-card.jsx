import React from 'react'

import DateForm from '../../date-form/dateForm.component';
import notFoundImg from "./../../../assets/not-found.png";
import { ReactComponent as StarLogo } from "../../../assets/star.svg";
import { setCardImageWidth } from '../../../assets/functions';

import "./episode-card.css"


export default function EpisodeCard({episode}) {
    const {name, still_path, episode_number, air_date, overview, vote_average, vote_count } = episode

  return (
    <div className="episode-card">
      <h3 className="episode-title">{name}</h3>
      <p className="episode-count">Episode {episode_number}</p>
      {still_path ? (
          <img
            className="episode-image"
            src={`https://image.tmdb.org/t/p/w${setCardImageWidth(
              window.innerWidth
            )}00${still_path}`}
            alt={name}
          />
        ) : (
          <img
            className="episode-image"
            src={notFoundImg}
            alt={name}
            style={{ height: "200px" }}
          />
        )}
        {overview ? (
          <p className="episode-overview"> &nbsp; &nbsp; &nbsp; {overview}</p>
        ) : (
          ""
        )}
        <div className="card-footer">
          <DateForm date={air_date} />

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
  )
}
