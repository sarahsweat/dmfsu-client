import React from 'react'
import { Header, Container, Card } from 'semantic-ui-react'
import UserForm from './UserForm'


const SignupContainer = (props) => {
  return (
    <Container textAlign='center'>
      <br/><br/><br/><br/>
      <Card fluid className='bg shadow-box'>
        <Card.Content>
          <Header className='main-title' as='h1' textAlign='center'>Signup!</Header>
          <br/>
          <UserForm teams={props.teams} handlePost={props.handlePost}/>
        </Card.Content>
      </Card>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Container>
  )
}

export default SignupContainer
