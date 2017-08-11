import React, { Component } from 'react'
import { Header, Container, Form, Button, Label, Input } from 'semantic-ui-react'

export default class TeamForm extends Component {
  state = {
      name: undefined,
      bio: undefined,
      photo: undefined,
      goal: undefined

    }

    handleChange = (event) => {
      let key = `${event.target.name}`
      let value = `${event.target.value}`
      this.setState({
        [key]: value
      })
    }

    handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/teams', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
      }
    })
    .then(() => this.props.handlePost())
    .then(() => this.setState({
      name: '',
      bio: '',
      photo: '',
      goal: ''
    }))
  }



    render(){
      return(
        <Container>
          <Header as='h2' textAlign='center'>Create a new Team!</Header>
           <Form size='large' id='team-form' onSubmit={this.handleSubmit} >
            <Form.Group widths='equal'>
             <Form.Input label='Team Name' name='name' value={this.state.name} onChange={this.handleChange} />
             <Form.Input label='Goal' labelPosition='left' type='text'><Label basic>$</Label><Input name='goal' value={this.state.goal} onChange={this.handleChange}/></Form.Input>
           </Form.Group>
             <Form.Input label='Photo Link' name='photo' value={this.state.photo} onChange={this.handleChange} />
             <Form.Input label='Bio' name='bio' value={this.state.bio} onChange={this.handleChange} />
             <Button type='submit'>Create Team</Button>
           </Form>
        </Container>
      )
    }
}
