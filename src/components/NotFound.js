import React from 'react'
import { Container, Card, Header, Divider, Image } from 'semantic-ui-react'

const NotFound = (props) => {

  return (
    <Container textAlign='center'>
      <br/><br/><br/><br/>
      <Card fluid className='bg shadow-box'>
        <Card.Content>
          <br/>
          <Card.Header as='h2'>404 page not found</Card.Header>
          <Divider/>
          <Card.Header as='h4'>We are sorry but the page you are looking for does not exist.</Card.Header>
          <Image src='https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/17038836_10154173424696345_6967223412126869544_o.jpg?oh=85ab863613f24fab837a48115329b607&oe=5A32F92D' size='huge'/>
        </Card.Content>
      </Card>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Container>
  )

}

export default NotFound
