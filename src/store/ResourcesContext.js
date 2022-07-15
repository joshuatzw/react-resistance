import {createContext, useState} from 'react'

let groupSize = {
  // Key: Value = Group: Spies
  5:2,
  6:2,
  7:3,
  8:3,
  9:3,
  10:4
}

let crewSize = [
  // 5 players index 0, 
  // 6 players index 1, etc.
  {1:2, 2:3, 3:2, 4:3, 5:3},
  {1:2, 2:3, 3:4, 4:3, 5:4},
  {1:2, 2:3, 3:3, 4:4, 5:4},
  {1:3, 2:4, 3:4, 4:5, 5:5}
]

export const ResourcesContext = createContext({
  numOfPlayers: 0,
  playerArray: [],
  spyPos: [],
  identityArray: [],
  playerObject: {},
  captainNumber: 0,
  introductionOn: true,
  playerInitOn: false,
  playerRevealOn: false,
  missionOn: false,
  voteOn: false,
  beforeResultsOn: false,
  resultsOn: false,
  gameOverOn: false,
  currentPlayer: 0,
  currentMissionNumber: 0,
  crewSizeObject: {},
  currentCrewList: [],
  votingIndex: 0,
  votePass: 0,
  voteFail: 0,
  resultText: "",
  overallPass: 0,
  overallFail: 0,
  gameOverText: '',
  finishIntroduction: (()=>null),
  grabNames: (()=>null),
  moveToNextPlayer: (()=>null),
  pullCrewList: (()=>null),
  missionLaunch: (()=>null),
  voteYes: (()=>null),
  voteNo: (()=>null),
  proceedToResults: (()=>null),
  nextMission: (()=>null),
  resetGame: (()=>null),
})

export default function Resources(props) {
  const [numOfPlayers, setNumOfPlayers] = useState(0)
  const [playerArray, setPlayerArray] = useState([])
  const [identityArray, setIdentityArray] = useState([])
  const [captainNumber, setCaptainNumber] = useState(0)
  const [introductionOn, setIntroductionOn] = useState(true)
  const [playerInitOn, setPlayerInitOn] = useState(false)
  const [playerRevealOn, setPlayerRevealOn] = useState(false)
  const [missionOn, setMissionOn] = useState(false)
  const [voteOn, setVoteOn] = useState(false)
  const [beforeResultsOn, setBeforeResultsOn] = useState(false)
  const [resultsOn, setResultsOn] = useState(false)
  const [gameOverOn, setGameOverOn] = useState(false)
  const [spyPos, setSpyPos] = useState([])
  const [playerObject, setPlayerObject] = useState({})
  const [currentPlayer, setCurrentPlayer] = useState(0)
  const [currentMissionNumber, setCurrentMissionNumber] = useState(0)
  const [crewSizeObject, setCrewSizeObject] = useState({})
  const [currentCrewList, setCurrentCrewList] = useState([])
  const [votingIndex, setVotingIndex] = useState(0)
  const [votePass, setVotePass] = useState(0)
  const [voteFail, setVoteFail] = useState(0)
  const [resultText, setResultText] = useState()
  const [overallPass, setOverallPass] = useState(0)
  const [overallFail, setOverallFail] = useState(0)
  const [gameOverText, setGameOverText] = useState()
  
  
  

  const context = {
    numOfPlayers: numOfPlayers,
    playerArray: playerArray,
    spyPos: spyPos,
    identityArray: identityArray,
    playerObject: playerObject,
    captainNumber: captainNumber,
    introductionOn: introductionOn,
    playerInitOn: playerInitOn,
    playerRevealOn: playerRevealOn,
    missionOn: missionOn,
    voteOn: voteOn,
    beforeResultsOn: beforeResultsOn,
    resultsOn: resultsOn,
    gameOverOn: gameOverOn,
    currentPlayer: currentPlayer,
    currentMissionNumber: currentMissionNumber,
    crewSizeObject: crewSizeObject,
    currentCrewList: currentCrewList,
    votingIndex: votingIndex,
    votePass: 0,
    voteFail: 0,
    resultText: resultText,
    overallPass: 0,
    overallFail: 0,
    gameOverText: gameOverText,
    finishIntroduction: finishIntroduction,
    grabNames: grabNames,
    moveToNextPlayer: moveToNextPlayer,
    pullCrewList: pullCrewList,
    missionLaunch: missionLaunch,
    voteYes: voteYes,
    voteNo: voteNo,
    nextMission: nextMission,
    proceedToResults: proceedToResults,
    resetGame: resetGame,
  }

  // INTRODUCTION PAGE:
  function finishIntroduction(data) {
    setNumOfPlayers(data)
    setIntroductionOn(!introductionOn)
    determineCrewSize(data)

    // Creating Player and numbers Array:
    let emptyArray = []
    let positions = []
    let tempIdentityArray = []
    for (let i = 0; i < data; i++) {
      let j = i + 1
      emptyArray.push("player "+ j)
      positions.push(i)
      tempIdentityArray.push("Resistance")
    }
    setPlayerArray(emptyArray)
    setPlayerInitOn(!playerInitOn)
    

    // Setting up the spy positions. 
    // Step 1: use numbers list
    // Step 2: shuffle list.  
    for (let i = positions.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      const temp = positions[i]
      positions[i] = positions[j]
      positions[j] = temp
    }

    let tempSpyArray = []
    // Grabbing the number of spies positions of the shuffled array to be spyPos
    for (let i = 0; i < groupSize[data]; i++) {
      tempSpyArray.push(positions[i])
    }    
    // I have a feeling I don't need this. 
    setSpyPos(tempSpyArray)

    // Grabbing the last number from positions array to be the first captain.
    let tempCaptain = positions[positions.length - 1]
    setCaptainNumber(tempCaptain)

    // tempIdentityArray shows all as Resistance.
    // Use tempSpyArray to change it to spies.

    for (let i = 0; i < tempSpyArray.length; i++) {
      tempIdentityArray[tempSpyArray[i]] = "Spy"
    }
    setIdentityArray(tempIdentityArray)
  }

  // PLAYER INIT PAGE:
  function grabNames(data) {
    setPlayerArray(data) 
    let tempPlayerArray = data
    setPlayerArray(tempPlayerArray)
    // Creating an Object. Key:Value = Player Name: Identity 
    
    let tempPlayerObject = {}
    for (let i = 0; i < tempPlayerArray.length; i++) {
      tempPlayerObject[tempPlayerArray[i]] = identityArray[i]
    }

    setPlayerObject(tempPlayerObject)

    // Wrap up Player Init, turn Player Init OFF
    setPlayerInitOn(!playerInitOn)

    // Turn on player Reveal
    setPlayerRevealOn(!playerRevealOn)

  }

  // Setting up crew size object -> this is called in first step.
  function determineCrewSize(numOfPlayers) {
    let index = numOfPlayers - 5
    if (index > 3) { index = 3 }
    let tempCrewSizeObject = crewSize[index]
    setCrewSizeObject(tempCrewSizeObject)
  }

  // IDENTITY REVEAL PAGE:
  function moveToNextPlayer() {
    if (currentPlayer < playerArray.length - 1) {
      setCurrentPlayer(currentPlayer + 1)
    } else {
      setPlayerRevealOn(!playerRevealOn)
      setMissionOn(!missionOn)
    }
  }

  
  // MISSION PAGE && GAME OVER CHECK
  function nextMission() {
    if (overallPass > 2 || overallFail > 2){
      if (overallPass > 2) {
        setGameOverText("Resistance Won!")
        setResultsOn(false)
        setGameOverOn(true)
      } else {
        setGameOverText("Spies Have Won!")
        setResultsOn(false)
        setGameOverOn(true)
      }
    } else {
      setCurrentMissionNumber(currentMissionNumber + 1)
      setResultsOn(false)
      setMissionOn(true)
    }
  }

  function pullCrewList(data) {
    setCurrentCrewList(data)
    console.log("crew list updated in resources: " + data);

    // While pulling crew list, set up the captain number for the next round.
    if (captainNumber < playerArray.length - 1){
      setCaptainNumber(captainNumber + 1)
    } else {
      setCaptainNumber(0)
    }
  }

  function missionLaunch() {
    setMissionOn(!missionOn)
    setVoteOn(!voteOn)
  }

  // VOTING SEQUENCE
  function voteYes() {
    if (votingIndex < currentCrewList.length - 1) {
    setVotingIndex(votingIndex + 1)
    setVotePass(votePass + 1)
    } else {
      setVotePass(votePass + 1)
      setVoteOn(!voteOn)
      setBeforeResultsOn(!beforeResultsOn)
    }
  }

  function voteNo() {
    if (votingIndex < currentCrewList.length - 1) {
    setVotingIndex(votingIndex + 1)
    setVoteFail(voteFail + 1)
    } else {
      setVoteFail(voteFail + 1)
      setVoteOn(!voteOn)
      setBeforeResultsOn(!beforeResultsOn)
    }
  }

  function tabulateResult() {
    if (votePass > voteFail) {
      console.log("Votes pass: " + votePass + ", Votes Fail: " + voteFail)
      setResultText("Mission Successful!")
      setOverallPass(overallPass + 1)
      resetCounters()
      
    } else {
      console.log("Votes pass: " + votePass + ", Votes Fail: " + voteFail)
      setResultText("Mission Fail")
      setOverallFail(overallFail + 1)
      resetCounters()
    }
  }

  // RESULTS PAGE
  function proceedToResults() {
    tabulateResult()
    setBeforeResultsOn(!beforeResultsOn)
    setResultsOn(!resultsOn)
  }
  

  // Reset all voting-related counters
  function resetCounters() {
    setVoteFail(0)
    setVotePass(0)
    setVotingIndex(0)
  }

  // Reset Game
  function resetGame() {
    setOverallPass(0)
    setOverallFail(0)
    resetCounters()
    setNumOfPlayers(0)
    setPlayerArray([])
    setIdentityArray([])
    setPlayerObject({})
    setCurrentMissionNumber(0)
    setCurrentPlayer(0)
    setGameOverOn(false)
    setIntroductionOn(true)
  }

  return(
    <ResourcesContext.Provider value={context}>
      {props.children}
    </ResourcesContext.Provider>
  )
}