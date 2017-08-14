import React from 'react'
import { Header, Container } from 'semantic-ui-react'
import TeamList from './TeamList'
import Search from '../Search'


const TeamContainer = (props) => {
  return (
    <Container textAlign='center'>
      <Header as='h2' textAlign='center'>Teams</Header>
      <Search handleSearch={props.handleSearch}/>
      <TeamList teams={props.teams.sort(function(a,b) {return (a.team_total < b.team_total) ? 1 : ((b.team_total < a.team_total) ? -1 : 0);} )} />
    </Container>
  )

}

export default TeamContainer
