import { ResourcesContext } from "../store/ResourcesContext"
import { useContext } from "react"
import '../styling/Introduction.css'

export default function Introduction() {

  const resources = useContext(ResourcesContext)

  function submitHandler(e) {
    e.preventDefault()
    let numberOfPlayers = e.target[0].value
    resources.finishIntroduction(numberOfPlayers)
  }

  return(
    <div className="introduction">
      <h1> Welcome to resistance! </h1>
      <p>how many players are playing today? </p>
      <div className="introduction-input">
        <form onSubmit={submitHandler}>
          <input className="form-control" type="number" max="10"/>
          <button className="btn" type="submit"> Submit </button>
        </form>
      </div>
    </div>
  )
}