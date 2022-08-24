import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EpisodeCard from "../../cards-components/Episode-Card/episode-card";

import { ReactComponent as BackArrowLogo } from "../../../assets/back-arrow.svg";
import { fetchDataAsync } from "../../../helpers/functions";
import { API_KEY } from "../../../config";

import "./episodes-container.css";

export default function EpisodesContainer({ serialId, seasonNo, serialName }) {
  const [episodes, setEpisodes] = useState([]);

  const navigate = useNavigate();


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
    <>
      <div className="episodes-container-header">
        <BackArrowLogo className="episodes-container-arrow-logo" onClick={() => navigate(-1)}/>
        <div className="episodes-container-titles">
          <h1 className="episodes-page-title">{serialName}</h1>
          <h1 className="episodes-season-title">Season {seasonNo}</h1>
        </div>
      </div>
      <div className="episodes-card-container">
        {episodes.map((episode) => (
          <EpisodeCard episode={episode} key={episode.id} />
        ))}
      </div>
    </>
  );
}
