import React from 'react'
import { useContext } from 'react'
import { WatchlistContext } from '../../contexts/watchlist.context'

import Card from '../../components/card/card.component'

import './watchlist.styles.css'


export default function Watchlist() {
  const {watchlist} = useContext(WatchlistContext)
  return (
    <>
    <h1 className="home-title">Your Watchlist Movies</h1>
    <div className="card-container">
      {watchlist.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
    </>
  )
}
