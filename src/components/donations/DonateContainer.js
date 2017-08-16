import React from 'react'
import { Header, Container } from 'semantic-ui-react'
import DonationForm from './DonationForm'


const DonateContainer = (props) => {
  return (
    <Container textAlign='center'>
      <br/><br/><br/><br/>
      <Header className='main-title' as='h1' textAlign='center'>Donate!</Header>
      <br/>
      <DonationForm users={props.users} handlePost={props.handlePost}/>
    </Container>
  )

}

export default DonateContainer
