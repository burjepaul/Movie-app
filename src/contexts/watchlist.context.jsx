import { createContext, useState, useEffect } from "react";

export const WatchlistContext = createContext({
  watchlist: [],
  setWatchlist: () => null,
});

export const WatchlistProvider = ({ children }) => {

  const  getMemoryMovies = () => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist"));
    if (watchlist) {
      return watchlist;
    }else return []
  }

  const [watchlist, setWatchlist] = useState(getMemoryMovies());
  const value = { watchlist, setWatchlist };


  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
};
