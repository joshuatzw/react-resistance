import {useContext, useState} from 'react'
import { ResourcesContext } from '../store/ResourcesContext'
import '../styling/Mission.css'

export default function Mission() {
  const resources = useContext(ResourcesContext)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState()
  
  
  function handleSubmit(e) {
    e.preventDefault();
    let tempCrewList = [];
    for(let i=0; i<resources.playerArray.length; i++){
      let chosenStatus = e.target[i].checked
      console.log(e.target[i].checked)
      if (chosenStatus === true){
        tempCrewList.push(resources.playerArray[i])
      }
    }

    resources.pullCrewList(tempCrewList);
    
    if (tempCrewList.length > resources.crewSizeObject[resources.currentMissionNumber + 1]) {
      setError(true)
      setErrorMessage("Too many selected!")
    } else if (tempCrewList.length < resources.crewSizeObject[resources.currentMissionNumber + 1]){
      setError(true)
      setErrorMessage("Too few selected!")
    } else {
      resources.missionLaunch()
    }
  }

  return(
    <div className='mission-container'>
      <h1> Mission {resources.currentMissionNumber + 1} </h1>
      <h2> Crew Captain: {resources.playerArray[resources.captainNumber]}</h2>
      <h2> Crew Size: {resources.crewSizeObject[resources.currentMissionNumber + 1]}</h2>
      <h3> {error ? errorMessage : null} </h3>

      <form class='mission-form' onSubmit={handleSubmit}>
        {resources.playerArray.map((player)=>{
          return(
                <div key={player}>
                  
                  <input id={player} className='form-check-input' type="checkbox" value={player} /> 
                  <label className='player-label' htmlFor={player}> {player} </label> 

                  {/* <input className='form-check-input' type="checkbox" value={player} /> 
                  <label htmlFor={player}> {player} </label> */}

                  {/* <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off" value={player} />
                  <label htmlFor={player} class="btn btn-primary" for="btn-check"> {player} </label> */}
                </div>
          )
        })}
        <button className="btn mission-button" type='submit'> Let's Go! </button>
      </form>
      
    </div>
  )

}