import {useContext} from 'react'
import { ResourcesContext } from '../store/ResourcesContext'
import '../styling/PlayerInit.css'

export default function PlayerInit() {
  const resources = useContext(ResourcesContext)

  function handleSubmit(e) {
    e.preventDefault();
    let nameArray = []
    for (let i = 0; i < resources.numOfPlayers; i++) {
      nameArray.push(e.target[i].value)
    }
    resources.grabNames(nameArray)
  }
  
  
  return (
    <div className='player-init form-group'>
      <h1> Player Names: </h1>
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
        <button className='btn btn-warning mb-2' type="submit"> Submit </button>
      </form>
    </div>
    )
}