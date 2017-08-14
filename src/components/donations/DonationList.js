import React from 'react'
import { Feed } from 'semantic-ui-react'
import DonationCard from './DonationCard'


const DonationList = (props) => {

  return (
    <Feed centered='true' >
      {props.donations.map( (donation, index) => <DonationCard donation={donation} index={index}/>)}
    </Feed>
  )

}

export default DonationList
