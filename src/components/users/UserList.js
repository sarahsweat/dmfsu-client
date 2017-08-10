import React from 'react'
import { Card } from 'semantic-ui-react'
import UserCard from './UserCard'


const UserList = (props) => {
  return (
    <Card.Group centered='true' itemsPerRow={5}>
      {props.users.map( (user, index) => <UserCard user={user} index={index}/>)}
    </Card.Group>
  )

}

export default UserList
