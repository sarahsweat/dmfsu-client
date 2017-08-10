import React from 'react'
import { Card } from 'semantic-ui-react'
import TeamCard from './TeamCard'


const TeamList = (props) => {
  return (
    <Card.Group centered='true' itemsPerRow={5}>
      {props.teams.map( (team, index) => <TeamCard team={team} index={index}/>)}
    </Card.Group>
  )

}

export default TeamList
