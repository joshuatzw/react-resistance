import {useContext} from 'react'
import { ResourcesContext } from '../store/ResourcesContext'
import '../styling/PlayerInit.css'

export default function PlayerInit() {
  const resources = useContext(ResourcesContext)

  function handleSubmit(e) {
    e.preventDefault();
    let nameArray = []
    for (let i = 0; i < resources.numOfPlayers; i++) {
      if (e.target[i].value !== '') {
        console.log(e.target[i].value)
        nameArray.push(e.target[i].value)
      }
    }
    if (resources.playerArray.length === nameArray.length) {
      resources.grabNames(nameArray)
    } else {
      nameArray =[]
      console.log("Please check name fields, cannot be empty")
    }
  }
  
  
  
  return (
    <div className='player-init form-group'>
      <h1> Player Names: </h1>
      <p> Please input player names below: </p>
      <form onSubmit={handleSubmit}>
        {resources.playerArray.map((player)=>{
          return(
            <div className='col-xs-3'>
              <span key={player}>
              <input className='form-control' placeholder={player} /> <br />
              </span>
            </div>
          )
        })}
        <button className='btn btn-warning mb-2' onClick={resources.reverseIntroBoolean}> Back </button>
        <button className='btn btn-warning mb-2' type="submit"> Submit </button>
      </form>
    </div>
    )
}