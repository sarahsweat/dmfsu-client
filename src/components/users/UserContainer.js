import React from 'react'
import { Header, Container, Card } from 'semantic-ui-react'
import UserList from './UserList'
import Search from '../Search'


const UserContainer = (props) => {
  return (
    <Container textAlign='center'>
      <br/><br/><br/><br/>
      <Card fluid className='bg shadow-box'>
        <Card.Content>
          <Header className='main-title' as='h1' textAlign='center'>Fundraisers</Header>
          <br/>
          <Search handleSearch={props.handleSearch}/>
          <br/>
          <UserList users={props.users.sort(function(a,b) {return (a.individual_total < b.individual_total) ? 1 : ((b.individual_total < a.individual_total) ? -1 : 0);} )} />
        </Card.Content>
      </Card>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>

    </Container>
  )

}

export default UserContainer
