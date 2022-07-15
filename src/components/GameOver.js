import { useContext } from "react";
import { ResourcesContext } from "../store/ResourcesContext";


export default function GameOver() {
  const resources = useContext(ResourcesContext)

  return(
    <div>
      <h1> {resources.gameOverText} </h1>
      <button className="btn" onClick={resources.resetGame}> Play Again </button>
    </div>
  )
}