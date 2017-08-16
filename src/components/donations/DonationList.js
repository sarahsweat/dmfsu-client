import React from 'react'
import { Feed, Card } from 'semantic-ui-react'
import DonationCard from './DonationCard'


const DonationList = (props) => {

  return (
    <Card fluid textAlign='center' centered='true' className='shadow-box' style={{background: 'rgba(245,245,245,0.7)'}}>
      <Card.Content>
        <Feed centered='true' >
          {props.donations.map( (donation, index) => <DonationCard donation={donation} index={index}/>)}
        </Feed>
      </Card.Content>
    </Card>
  )

}

export default DonationList
