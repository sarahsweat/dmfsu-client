import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const UserCard = (props) => {

  return (
    <Card centered='true' key={props.index}>
    <Image src={props.user.photo} className='card-image' />
     <Card.Content >
       <Card.Header >
          {props.user.first_name} {props.user.last_name}
       </Card.Header>
       <Card.Meta><b>Total Raised: ${props.user.donations_received.reduce((sum, value) => sum + value.amount, 0)}</b></Card.Meta>
       <Card.Description>
        {props.user.bio.substring(0,52)}
       </Card.Description>
     </Card.Content>
     <Card.Content extra>
       <div centered='true'>
         <Button basic color='red'>Donate to {props.user.first_name}</Button>
       </div>
     </Card.Content>
   </Card>
  )

}

export default UserCard
