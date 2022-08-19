import { useState } from 'react';
import {React, useEffect} from 'react'
import { API_KEY } from '../../config'
import EpisodeCard from '../cards-components/Episode-Card/episode-card';

export default function TvSerialEpisodes({serialId, seasonNo}) {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${serialId}/season/${seasonNo}?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => setEpisodes(result.episodes));
  }, [serialId, seasonNo]);

  console.log(episodes)
  return (
    <div className='card-container'>
      {episodes.map(episode => (
        <EpisodeCard episode={episode} ket={episode.id}/>
      ))}
    </div>
  )
}
