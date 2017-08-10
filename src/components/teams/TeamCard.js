import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const TeamCard = (props) => {

  return (
    <Card centered='true' key={props.index}>
    <Image src={props.team.photo} className='card-image' />
     <Card.Content >
       <Card.Header >
          {props.team.name}
       </Card.Header>
       {/* <Card.Meta><b>Total Raised: ${props.user.donations_received.reduce((sum, value) => sum + value.amount, 0)}</b></Card.Meta> */}
       <Card.Description>
        {props.team.bio.substring(0,52)}
       </Card.Description>
     </Card.Content>
   </Card>
  )

}

export default TeamCard
