import React from 'react'
import { Card, Container } from 'semantic-ui-react'
import UserCard from './UserCard'


const UserList = (props) => {
  return (
    <Container>
      <Card.Group itemsPerRow={5}>
        {props.users.map( (user, index) => <UserCard user={user} key={index}/>)}
      </Card.Group>
    </Container>
  )
}

export default UserList
