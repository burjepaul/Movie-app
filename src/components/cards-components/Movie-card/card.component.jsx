import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";

import FrontCard from "./front-card.component";
import BackCard from "./back-card.component"

export default function Card({ movie }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleBackOfTheCard = (movie) => {
    setIsFlipped(!isFlipped);
  };

  return (
  <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <FrontCard movie={movie} onClickCard={handleBackOfTheCard}/>
      <BackCard movie={movie} onClickCard={handleBackOfTheCard}/> 
  </ReactCardFlip>  
  )
}
