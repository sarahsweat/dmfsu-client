import React from 'react'
import { Card } from 'semantic-ui-react'
import DonationCard from './DonationCard'


const DonationList = (props) => {
  return (
    <Card.Group centered='true' itemsPerRow={5}>
      {props.donations.map( (donation, index) => <DonationCard donation={donation} index={index}/>)}
    </Card.Group>
  )

}

export default DonationList
