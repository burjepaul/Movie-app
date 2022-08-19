import React from "react";
import { useContext } from "react";
import { WatchlistContext } from "../../contexts/watchlist.context";

import Card from "../../components/cards-components/Movie-card/card.component";

import "./watchlist.styles.css";

export default function Watchlist() {
  const { watchlist } = useContext(WatchlistContext);
  if (watchlist.length !== 0) {
    return (
      <>
        <h1 className="home-title">Your Watchlist Movies</h1>
        <div className="card-container">
          {watchlist.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1 className="home-title">Your Watchlist Movies</h1>
        <h1 className="empty-message">Your Watchlist is Empty</h1>
      </>
    );
  }
}
