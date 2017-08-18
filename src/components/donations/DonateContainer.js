import React from 'react'
import { Header, Container, Card } from 'semantic-ui-react'
import DonationForm from './DonationForm'


const DonateContainer = (props) => {
  return (
    <Container textAlign='center'>
      <br/><br/><br/><br/>
      <Card fluid className='bg shadow-box'>
        <Card.Content>
          <Header className='main-title' as='h1' textAlign='center'>Donate!</Header>
          <br/>
          <DonationForm users={props.users} handlePost={props.handlePost}/>
        </Card.Content>
      </Card>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Container>
  )
}

export default DonateContainer
