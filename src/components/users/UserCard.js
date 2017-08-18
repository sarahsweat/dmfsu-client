import React from 'react'
import { Card, Image, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const UserCard = (props) => {

  return (
      props.user.individual_total >= 0 ?
      <Card className="shadow-box-images" key={props.index} >
       <Card.Content><Image src={props.user.photo} className='card-image' /></Card.Content>
       <Card.Content extra>
         <Link to={`/users/${props.user.id}`}>
           <Header as='h4'>
             {props.user.first_name} {props.user.last_name}
           </Header>
         </Link>
         { props.user.team? <b>Team: {props.user.team.name}<br/></b> : null}
         <b>Total Raised: ${props.user.individual_total.toLocaleString()}</b>
       </Card.Content>
      </Card>
      : null
    )

}

export default UserCard
