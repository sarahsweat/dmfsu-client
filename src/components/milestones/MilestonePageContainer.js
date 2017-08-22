import React from 'react'
import { Header, Container, Card, Image } from 'semantic-ui-react'
import UserList from '../users/UserList'
import MilestonesContainer from './MilestonesContainer'


const MilestonePageContainer = (props) => {
  return (
    <Container textAlign='center'>
      <br/><br/><br/><br/>

      <Card fluid className='bg shadow-box'>
        <Card.Content>
          <Header className='main-title' as='h1' textAlign='center'>Wall of Fame</Header>
        </Card.Content>
      </Card>

      <br/>

      <Image src='2017Morale.png' className='shadow-box' shape='rounded'/>

      <br/>

      <Card fluid className='bg shadow-box'>
        <Card.Content>
          <Header as='h2' textAlign='center'>2,200 Club Members</Header>
          <br/>
          <UserList users={props.users.filter(user => user.individual_total > 2199)} />
        </Card.Content>
      </Card>

      <br/>

      <Card fluid className='bg shadow-box'>
        <Card.Content>
          <Header  as='h2' textAlign='center'>Comma Club Members</Header>
          <br/>
          <UserList users={props.users.filter(user => user.individual_total > 999)} />
        </Card.Content>
      </Card>

      <br/>

      <Card fluid className='bg shadow-box'>
        <Card.Content>
          <Header as='h2' textAlign='center'>The Stats</Header>
          <MilestonesContainer users={props.users} data={props.data}/>
        </Card.Content>
      </Card>

      <br/><br/><br/>

    </Container>
  )
}

export default MilestonePageContainer
