import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Popular from "./routes/popular/popular.component";
import Watchlist from "./routes/watchlist/watchlist.component";
import TvShow from "./routes/tvShows/tvShow-container";
import TvSerialSeasons from "./components/card-containers/Seasons-container/seasons-container";
import EpisodesContainer from "./components/card-containers/Episodes-container/episodes-container";

import { useContext } from "react";
import { TVShowIDContext } from "./contexts/tvShow-id.context";
import { TVSeasonIDContext } from "./contexts/tvShow-seasonID.context";


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
          path={`/tvShow/${id[0]}`}
          element={<TvSerialSeasons serialId={id[0]} serialName={id[1]}/>}
        >

        </Route>
          <Route
          path={`/tvShow/${id[0]}/${seasonNo}`}
          element={<EpisodesContainer serialId={id[0]} serialName={id[1]} seasonNo={seasonNo}/>}
        />
      </Route>
    </Routes>
  );
}

export default App;
