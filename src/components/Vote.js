import { useContext } from "react"
import { ResourcesContext } from "../store/ResourcesContext"
import '../styling/Vote.css'

export default function Vote() {
  const resources = useContext(ResourcesContext)

  return(
    <div className="vote-container">
      <h1> {resources.currentCrewList[resources.votingIndex]} </h1>
      <div className="vote-button-container">
        <button className="btn vote-button-yes" onClick={resources.voteYes}> PASS </button>
        <button className="btn vote-button-no" onClick={resources.voteNo}> FAIL </button> 
      </div>
    </div>
  )
}