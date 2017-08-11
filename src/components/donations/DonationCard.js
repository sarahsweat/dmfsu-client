import React from 'react'
import { Feed, Icon, Image } from 'semantic-ui-react'

const DonationCard = (props) => {

  return (
    <Feed.Event centered='true' key={props.index}>

      <Feed.Label>
        <img src={props.donation.donor.photo} />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <a>{props.donation.donor.first_name}</a> donated <a>${props.donation.amount}</a> to <a>{props.donation.dancer.first_name}</a>
          <Feed.Date>{props.donation.created_at}</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          {props.donation.message}
       </Feed.Extra>
     </Feed.Content>
 </Feed.Event>
  )
}

export default DonationCard
