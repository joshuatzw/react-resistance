import { ResourcesContext } from "../store/ResourcesContext"
import { useContext, useState } from "react"
import '../styling/Introduction.css'

export default function Introduction() {

  const resources = useContext(ResourcesContext)
  const [errorMessage, setErrorMessage] = useState('')
  const [errorMessageStatus, setErrorMessageStatus] = useState(false)

  function submitHandler(e) {
    e.preventDefault()
    let numberOfPlayers = e.target[0].value
    if (numberOfPlayers !== '' || numberOfPlayers > 4) {
      if (errorMessage === true) {
        setErrorMessageStatus(false)
      }
      resources.finishIntroduction(numberOfPlayers)
      console.log(numberOfPlayers)    
    } else if (numberOfPlayers <= 4) {
      console.log("error")
      setErrorMessageStatus(true)
      setErrorMessage("Please select at least 5 players to begin")
    }
  }

  return(
    <div className="introduction">
      <h1> Welcome to resistance! </h1>
      <p>how many players are playing today? </p>
      {errorMessageStatus ? <p> {errorMessage} </p> : null}
      <div className="introduction-input">
        <form onSubmit={submitHandler}>
          <input className="form-control" type="number" max="10"/>
          <button className="btn" type="submit"> Submit </button>
        </form>
      </div>
    </div>
  )
}