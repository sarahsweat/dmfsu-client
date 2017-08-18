import React from 'react'
import { Feed, Card } from 'semantic-ui-react'
import DonationCard from './DonationCard'


const DonationList = (props) => {

  return (
    <Card fluid className='shadow-box' style={{background: 'rgba(245,245,245,0.9)'}}>
      <Card.Content>
        <Feed  >
          {props.donations.map( (donation, index) => <DonationCard donation={donation} key={index}/>)}
        </Feed>
      </Card.Content>
    </Card>
  )

}

export default DonationList
