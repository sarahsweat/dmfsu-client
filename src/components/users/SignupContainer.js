import React from 'react'
import { Header, Container } from 'semantic-ui-react'
import UserForm from './UserForm'


const SignupContainer = (props) => {
  return (
    <Container textAlign='center'>
      <br/><br/><br/><br/>
      <Header className='main-title' as='h1' textAlign='center'>Signup!</Header>
      <br/>
      <UserForm teams={props.teams} handlePost={props.handlePost}/>
    </Container>
  )

}

export default SignupContainer
