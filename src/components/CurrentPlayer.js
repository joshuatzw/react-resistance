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
   <div>
    <h1> {resources.playerArray[resources.currentPlayer]} </h1> 
    <button onClick={handleReveal}> Reveal </button>
    
    {reveal 
    ? <div> 
        {resources.playerObject[resources.playerArray[resources.currentPlayer]]} 
        <button onClick={nextPlayer}> Next Player </button>
      </div>
    : null}
    
   </div>
  )
}