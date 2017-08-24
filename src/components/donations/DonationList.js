import React from 'react'
import { Feed, Card, Container } from 'semantic-ui-react'
import DonationCard from './DonationCard'


const DonationList = (props) => {

  return (
    // <Card fluid className='shadow-box' style={{background: 'rgba(245,245,245,0.9)'}}>
    //   <Card.Content>
      <Container className='shadow-box' style={{backgroundColor: '#ffffff', padding: '20px 20px 20px 20px', borderRadius: '7px', maxHeight: '335px', overflowY: 'auto'}}>
        <Feed >
          {props.donations.map( (donation, index) => <DonationCard donation={donation} key={index}/>)}
        </Feed>
      </Container>
  //   </Card.Content>
    // </Card>
  )

}

export default DonationList
