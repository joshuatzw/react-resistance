import {useContext} from 'react'
import { ResourcesContext } from '../store/ResourcesContext'

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
    <div>
      <h1> Names Please: </h1>
      <form onSubmit={handleSubmit}>
      {resources.playerArray.map((player)=>{
        return(
          <span key={player}>
          <input placeholder={player} /> <br />
          </span>
        )
      })}
      <button type="submit"> Submit </button>
    </form>
  </div>
  )
}