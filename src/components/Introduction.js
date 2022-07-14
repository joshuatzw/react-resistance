import { ResourcesContext } from "../store/ResourcesContext"
import { useContext } from "react"

export default function Introduction() {

  const resources = useContext(ResourcesContext)

  function submitHandler(e) {
    e.preventDefault()
    let numberOfPlayers = e.target[0].value
    resources.finishIntroduction(numberOfPlayers)
  }

  return(
    <div>
      <h1> Welcome to resistance, how many players are playing today? </h1>
      <form onSubmit={submitHandler}>
        <input type="number" max="10"/>
        <button type="submit"> Submit </button>
      </form>
    </div>
  )
}