import React from 'react'
import { Header, Container, Divider, Card } from 'semantic-ui-react'
import TeamList from './TeamList'
import TeamForm from './TeamForm'
import Search from '../Search'


const TeamContainer = (props) => {
  return (
    <Container textAlign='center'>
      <br/><br/><br/><br/>
      <Card fluid className='bg shadow-box'>
        <Card.Content>
          <Header className='main-title' as='h1' textAlign='center'>Teams</Header>
          <br/>
          <Search handleSearch={props.handleSearch}/>
          <br/>
          <TeamList teams={props.teams.sort(function(a,b) {return (a.team_total < b.team_total) ? 1 : ((b.team_total < a.team_total) ? -1 : 0);} )} />
          <br/>
          <Divider/>
          <TeamForm handlePost={props.handlePost}/>
        </Card.Content>
      </Card>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Container>
  )

}

export default TeamContainer
