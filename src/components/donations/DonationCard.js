import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const DonationCard = (props) => {

  return (
    <Card centered='true' key={props.index}>
     <Card.Content >
       <Card.Header >
          ${props.donation.amount}
       </Card.Header>
       <Card.Meta>
         {props.donation.donor.first_name} donated to {props.donation.dancer.first_name}
       </Card.Meta>
       <Card.Description>
        {props.donation.message}
       </Card.Description>
     </Card.Content>
   </Card>
  )
}

export default DonationCard
