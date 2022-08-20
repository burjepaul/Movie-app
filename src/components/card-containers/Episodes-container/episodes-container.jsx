import { React, useEffect, useState } from "react";
import { fetchDataAsync } from "../../../assets/functions";
import { API_KEY } from "../../../config";
import EpisodeCard from "../../cards-components/Episode-Card/episode-card";

import "./episodes-container.css";

export default function EpisodesContainer({ serialId, seasonNo }) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDataAsync(
        `https://api.themoviedb.org/3/tv/${serialId}/season/${seasonNo}?api_key=${API_KEY}&language=en-US`
      );
      setEpisodes(result.episodes);
    };
    fetchData();
  }, [serialId, seasonNo]);

  return (
    <div className="episodes-card-container">
      {episodes.map((episode) => (
        <EpisodeCard episode={episode} ket={episode.id} />
      ))}
    </div>
  );
}
