import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Popular from "./routes/popular/popular.component";
import Watchlist from "./routes/watchlist/watchlist.component";
import TvShow from "./routes/tvShows/tv-show";
import { useContext } from "react";
import { TVShowIDContext } from "./contexts/tvShow-id.context";
import { TVSeasonIDContext } from "./contexts/tvShow-seasonID.context";
import TvSerialSeasons from "./components/TvSerialSeasons/TvSerialSeasons";
import TvSerialEpisodes from "./components/TvSerialEpisodes/TvSerialEpisodes";

function App() {
  const { id } = useContext(TVShowIDContext);
  const { seasonNo } = useContext(TVSeasonIDContext);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route exact path="/tvShow" element={<TvShow />} />
        <Route
          exact
          path={`/tvShow/${id}`}
          element={<TvSerialSeasons serialId={id} />}
        >

        </Route>
          <Route
          path={`/tvShow/${id}/${seasonNo}`}
          element={<TvSerialEpisodes serialId={id} seasonNo={seasonNo}/>}
        />
      </Route>
    </Routes>
  );
}

export default App;
