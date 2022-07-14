import { useContext } from "react"
import { ResourcesContext } from "../store/ResourcesContext"

export default function Vote() {
  const resources = useContext(ResourcesContext)

  function voteYes() {
    resources.voteYes()
  }

  function voteNo() {
    resources.voteNo()
  }

  return(
    <div>
      <h1> {resources.currentCrewList[resources.votingIndex]} </h1>
      <button onClick={resources.voteYes}> Yes </button>
      <button onClick={voteNo}> No </button> 
    </div>
  )
}