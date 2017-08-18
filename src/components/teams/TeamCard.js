import React from 'react'
import { Card, Image, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const TeamCard = (props) => {

  return (
    <Card className="shadow-box-images" centered='true' >
      <Card.Content ><Image src={props.team.photo} /></Card.Content>
      <Card.Content extra>
        <Link to={`/teams/${props.team.id}`}>
          <Header as='h4'>
            {props.team.name}
          </Header>
        </Link>
        <b>Total Raised: ${props.team.team_total.toLocaleString()}</b>
      </Card.Content>
    </Card>
  )

}

export default TeamCard
