import { useContext } from "react"
import { ResourcesContext } from "../store/ResourcesContext"

export default function Results() {
  
  const resources = useContext(ResourcesContext)
  
  function handleClick() {
    resources.nextMission()
  }

  return( 
    <div> 
      <h1>
        {resources.resultText}
      </h1>
      
      <h2>
        {resources.resultNumbers}
      </h2>

      <button className="btn view-results-button" onClick={handleClick}> Continue </button>
    </div>
  )
}