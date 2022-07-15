import { useContext, useState } from "react";
import { ResourcesContext } from "../store/ResourcesContext";

export default function CurrentPlayer(props) {
  const [reveal, setReveal] = useState(false)
  const resources = useContext(ResourcesContext)

  function handleReveal() {
    setReveal(!reveal)
  }

  function nextPlayer() {
    setReveal(!reveal)
    resources.moveToNextPlayer()
  }

  return(
   <div className="reveal">
    <h1> {resources.playerArray[resources.currentPlayer]} </h1> 
    <button className="btn" onClick={handleReveal}> Reveal </button>
    
    {reveal 
    ? <div className="reveal-content"> 
        <span className="inner-reveal-content" >{resources.playerObject[resources.playerArray[resources.currentPlayer]]} </span>
        <button className="btn" onClick={nextPlayer}> Next Player </button>
      </div>
    : null}
    
   </div>
  )
}