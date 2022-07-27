import { createContext, useState } from "react";

export const WatchlistContext = createContext({
  watchlist: [],
  setWatchlist: () => null,
});

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const value = { watchlist, setWatchlist };

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
};
