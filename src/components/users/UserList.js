import React from 'react'
import { Card, Container, Header } from 'semantic-ui-react'
import UserCard from './UserCard'


const UserList = (props) => {
  return (
    <Container>
      <Card.Group centered='true' textAlign='center' itemsPerRow={5}>
        {props.users.map( (user, index) => <UserCard user={user} index={index}/>)}
      </Card.Group>
    </Container>
  )

}

export default UserList
