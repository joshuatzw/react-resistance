import { useContext } from "react";
import { ResourcesContext } from "../store/ResourcesContext";


export default function GameOver() {
  const resources = useContext(ResourcesContext)

  return(
    <h1> {resources.gameOverText} </h1>
  )
}