import { React, useContext } from "react";

import Card from "../../components/cards-components/Movie-card/card.component";

import { WatchlistContext } from "../../contexts/watchlist.context";

import "./watchlist.styles.css";

export default function Watchlist() {
  const { watchlist } = useContext(WatchlistContext);
  if (watchlist.length !== 0) {
    return (
      <>
        <h1 className="watchlist-page-title">Your Watchlist Movies</h1>
        <div className="watchlist-page-card-container">
          {watchlist.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1 className="watchlist-page-title">Your Watchlist Movies</h1>
        <h1 className="watchlist-page-empty-message">Your Watchlist is Empty</h1>
      </>
    );
  }
}
