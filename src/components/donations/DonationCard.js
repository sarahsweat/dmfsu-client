import React from 'react'
import { Feed, Image } from 'semantic-ui-react'

const DonationCard = (props) => {

  return (
    <Feed.Event >
      <Feed.Label>
        <Image src={props.donation.donor.photo} />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          {props.donation.donor.first_name} donated ${props.donation.amount} to {props.donation.dancer.first_name}
          <Feed.Date>
            {props.donation.date}
          </Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          {props.donation.message}
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  )
}

export default DonationCard
