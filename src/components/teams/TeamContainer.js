import React from 'react'
import { Header, Container } from 'semantic-ui-react'
import TeamList from './TeamList'
import Search from '../Search'


const TeamContainer = (props) => {
  return (
    <Container textAlign='center'>
      <Header as='h2' textAlign='center'>Teams</Header>
      <Search handleSearch={props.handleSearch}/>
      <TeamList teams={props.teams} />
    </Container>
  )

}

export default TeamContainer
