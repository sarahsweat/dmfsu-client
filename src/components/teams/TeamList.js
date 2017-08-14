import React from 'react'
import { Card, Container } from 'semantic-ui-react'
import TeamCard from './TeamCard'


const TeamList = (props) => {
  return (
    <Container>
      <Card.Group centered='true'>
        {props.teams.map( (team, index) => <TeamCard team={team} index={index}/>)}
      </Card.Group>
    </Container>
  )

}

export default TeamList
