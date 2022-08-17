import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Popular from "./routes/popular/popular.component";
import Watchlist from "./routes/watchlist/watchlist.component";
import TvShow from "./routes/tvShows/tv-show";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/popular' element={<Popular />}/>
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/tvShow" element={<TvShow />} />
      </Route>
    </Routes>
  );
}

export default App;
