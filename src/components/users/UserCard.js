import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const UserCard = (props) => {

  return (
      props.user.individual_total >= 0 ?
      <Card className="shadow-box-images" key={props.index} >
        <Image src={props.user.photo} className='card-image' />
        <Card.Content  >
          <Link to={`/users/${props.user.id}`}>
           <Card.Header className="center-aligned">
              {props.user.first_name} {props.user.last_name}
           </Card.Header>
         </Link>
         <Card.Meta>
           { props.user.team? <b>Team: {props.user.team.name}<br/></b> : null}
           <b>Total Raised: ${props.user.individual_total.toLocaleString()}</b>
         </Card.Meta>
         {/* <Card.Description>
          {props.user.bio.substring(0,52)}
         </Card.Description> */}
       </Card.Content>
       {/* <Card.Content extra>
         <div centered='true'>
           <Button basic color='red'>Donate to {props.user.first_name}</Button>
         </div>
       </Card.Content> */}
     </Card>
     : null
    )

}

export default UserCard
