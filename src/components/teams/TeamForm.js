import React, { Component } from 'react'
import { Header, Container, Form, Button, Label, Input, Message } from 'semantic-ui-react'

export default class TeamForm extends Component {
  state = {
      name: undefined,
      bio: undefined,
      photo: undefined,
      goal: undefined,
      errors: []
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
    fetch(process.env.REACT_APP_API + '/teams', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((data) =>   {
      if (data.errors) {
        this.setState({
          errors: data.errors
      })
      } else {
        this.setState({
          errors: []
        })
      }
    })
    .then(() => this.props.handlePost())
    .then(() => this.setState({
      ...this.state.errors,
      name: '',
      bio: '',
      photo: '',
      goal: ''
    }))
  }



    render(){
      return(
        <Container>
          {this.state.errors.length > 0 ?
            <Message negative>
              <Message.Header>Error</Message.Header>
              <p>{this.state.errors[0]}</p>
            </Message>
            : null }
          <Header as='h2' textAlign='center'>Create a new Team!</Header>
           <Form size='large' id='team-form' onSubmit={this.handleSubmit} >
            <Form.Group widths='equal'>
             <Form.Input label='Team Name' name='name' value={this.state.name} onChange={this.handleChange} />
             <Form.Input label='Goal' labelPosition='left' type='text'><Label basic>$</Label><Input name='goal' value={this.state.goal} onChange={this.handleChange}/></Form.Input>
             <Form.Input label='Photo Link' name='photo' value={this.state.photo} onChange={this.handleChange} />
           </Form.Group>
           <Form.Input label='Bio' name='bio' value={this.state.bio} onChange={this.handleChange} />
           <Button type='submit'>Create Team</Button>
         </Form>
        </Container>
      )
    }
}
