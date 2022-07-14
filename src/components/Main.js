import Introduction from './Introduction'
import PlayerInit from './PlayerInit'
import CurrentPlayer from './CurrentPlayer'
import Mission from './Mission'
import Vote from './Vote'
import Results from './Results'
import GameOver from './GameOver'

import { ResourcesContext } from '../store/ResourcesContext'
import { useContext } from 'react'

export default function Main() {

  const resources = useContext(ResourcesContext)

  return (
    <div>
    {resources.introductionOn ? <Introduction /> : null}
    {resources.playerInitOn ? <PlayerInit /> : null}
    {resources.playerRevealOn ? <CurrentPlayer /> : null}
    {resources.missionOn ? <Mission />: null }
    {resources.voteOn ? <Vote /> : null}
    {resources.resultsOn ? <Results /> : null}
    {resources.gameOverOn ? <GameOver /> : null}
    </div>

  )
}