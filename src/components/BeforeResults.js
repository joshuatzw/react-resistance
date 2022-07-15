import { useContext } from "react";
import { ResourcesContext } from "../store/ResourcesContext";
import '../styling/BeforeResults.css'

export default function BeforeResults() {
  const resources = useContext(ResourcesContext)

  function clickHandler() {
    resources.proceedToResults()
  }

  return(
    <div>
      <h1> The votes are in! </h1>
      <button className="btn view-results-button" onClick={clickHandler}> View Summary </button>
    </div>
  )

}