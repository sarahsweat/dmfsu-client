import React from 'react'
import { Header, Container } from 'semantic-ui-react'
import UserList from './UserList'
import Search from '../Search'


const UserContainer = (props) => {
  return (
    <Container textAlign='center'>
      <Header as='h2' textAlign='center'>Fundraisers</Header>
      <Search handleSearch={props.handleSearch}/>
      <UserList users={props.users.sort(function(a,b) {return (a.individual_total < b.individual_total) ? 1 : ((b.individual_total < a.individual_total) ? -1 : 0);} )} />
    </Container>
  )

}

export default UserContainer
