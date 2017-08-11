import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const TeamCard = (props) => {

  return (
    <Card centered='true' key={props.index}>
    <Image src={props.team.photo} />
     <Card.Content >
       <Link to={`/teams/${props.team.id}`}>
         <Card.Header >
            {props.team.name}
         </Card.Header>
      </Link>
       <Card.Meta><b>Total Raised: ${props.team.team_total}</b>
      </Card.Meta>
       <Card.Description>
        {props.team.bio.substring(0,52)}
       </Card.Description>
     </Card.Content>
   </Card>
  )

}

export default TeamCard
