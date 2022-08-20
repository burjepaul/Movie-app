import { React, useState, useEffect } from "react";

import Card from "../../cards-components/Movie-card/card.component";

import { API_KEY } from "../../../config";

import "./card-container.css";
import Spinner from "../../spinner/spinner";

// const renderSpinner = () => {
//   return `
//     <div class="spinner">
//     <svg>
//       <use href="${icons}#icon-loader"></use>
//     </svg>
//   </div>
//     `;
// };

const CardContainer = ({ searchField }) => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchField}`,
        {
          method: "GET",
        }
      );
      const json = await data.json();
      console.log(json);
      setPopularMovies(
        json.results.slice(0, 6).sort((a, b) => b.popularity - a.popularity)
      );
    };

    fetchData();
  }, [searchField]);

  while (!popularMovies) return <Spinner />;

  if (popularMovies.length !== 0) {
    return (
      <div className="card-container">
        {popularMovies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    );
  } else
    return (
      <h1 className="empty-message">No movie with title "{searchField}"</h1>
    );
};

export default CardContainer;
