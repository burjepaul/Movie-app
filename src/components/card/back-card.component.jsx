import React, { useEffect, useState } from "react";

import { API_KEY } from "../../config";
import notFoundImg from "./../../assets/not-found.png";
import imdbLogo from "./../../assets/imdb-Logo.svg.png";

import "./back-card.styles.css";

function setCardImageWidth(displayWidth) {
  if (displayWidth > 1500) return 3;
  else if (displayWidth > 1300 && displayWidth <= 1500) return 3;
  else if (displayWidth > 1000 && displayWidth <= 1300) return 3;
  else if (displayWidth <= 1000) return 2;
}

export default function BackCard({ movie, onClickCard }) {
  const [detailedMovie, setDetailedMovie] = useState();

  const handleFrontOfTheCard = () => {
    onClickCard();
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => setDetailedMovie(result));
  }, [movie]);

  if (!detailedMovie) return;
  console.log(detailedMovie);

  const { title, backdrop_path, overview, tagline, genres, imdb_id, production_companies } =
    detailedMovie;

  let list = "";
  genres.splice(3)
  genres.map((genre) => { return(
    list += genre.name + "/")
  });

  let imdbLink = "https://www.imdb.com/title/" + imdb_id;

  return (
    <div className="card">
      <h4 className="movie-title" onClick={handleFrontOfTheCard}>
        {title}
      </h4>

      {backdrop_path ? (
        <img
          className="movie-backdrop-image"
          src={`https://image.tmdb.org/t/p/w${setCardImageWidth(
            window.innerWidth
          )}00${backdrop_path}`}
          alt={title}
          onClick={handleFrontOfTheCard}
        />
      ) : (
        <img
          className="movie-backdrop-image"
          src={notFoundImg}
          alt={title}
          style={{ height: "200px" }}
          onClick={handleFrontOfTheCard}
        />
      )}

      <div className="movie-descriptioon" onClick={handleFrontOfTheCard}>

        {tagline ? <h3 className="movie-tagline">"{tagline}"</h3>: ''}
        <p className="movie-text-desctiption">{overview}</p>
      </div>
      <div className="imdb-and-genre">
        <a className="imdb-logo-ref" href={imdbLink} target="_blank" rel="noreferrer">
          <img className="imdb-logo" src={imdbLogo} alt="imdb-logo"/>
        </a>
        <p className="movie-genre">{list.slice(0, list.length - 1)}</p>
      </div>
      {production_companies.length > 0 && production_companies[0].logo_path ? 
      <img
          className="movie-production-logo"
          src={`https://image.tmdb.org/t/p/w300${production_companies[0].logo_path}`}
          alt={title}
          onClick={handleFrontOfTheCard}
        /> : ''}
    </div>
  );
}
