import React, { Component } from 'react'
import { Header, Container, Form, Button, Label, Input } from 'semantic-ui-react'

export default class UserForm extends Component {
  state = {
      user_id: '',
      first_name: '',
      last_name: '',
      email: '',
      zip: '',
      photo: '',
      bio: '',
      goal: 500,
      team_id: undefined,
      team_captain: false
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
      fetch(process.env.REACT_APP_API + '/users', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .then(() => this.props.handlePost())
      .then(() => this.setState({
        user_id: '',
        first_name: '',
        last_name: '',
        email: '',
        zip: '',
        photo: '',
        bio: '',
        goal: 500,
        team_id: undefined,
        team_captain: false
      }))
    }

    handleTeamDropdown = (e,data) => {
      this.setState({ team_id: data.value })
    }

    render(){
      const teamOptions = this.props.teams.map((team,index) => { return {
        key: index,
        text: `${team.name}`,
        value: team.id,
        image: {
          avatar: true,
          src: team.photo
        }
      }
    })
      return(
      <Container>
        <br/><br/>
        <Header as='h2' textAlign='center'>Signup to be a fundraiser!</Header>
        <Form size='large' id='donation-form' onSubmit={this.handleSubmit} >
           <Form.Group widths='equal'>
             <Form.Input label='First Name' name='first_name' value={this.state.first_name} onChange={this.handleChange} />
             <Form.Input label='Last name' name='last_name' value={this.state.last_name} onChange={this.handleChange} />
             <Form.Input label='Goal' labelPosition='left' type='text'><Label basic>$</Label><Input name='goal' value={this.state.goal} onChange={this.handleChange}/></Form.Input>
           </Form.Group>
           <Form.Group widths='equal'>
             <Form.Input label='Email' name='email' value={this.state.email} onChange={this.handleChange} />
             <Form.Input label='Zipcode' name='zip' value={this.state.zip} onChange={this.handleChange} />
             <Form.Dropdown label="Team" placeholder='Team' name='team_id' value={this.state.team_id} fluid selection options={teamOptions} onChange={this.handleTeamDropdown} />
             <Form.Input label='Photo Link' name='photo' value={this.state.photo} onChange={this.handleChange} />
           </Form.Group>
           <Form.Input label='Bio' name='bio' value={this.state.bio} onChange={this.handleChange} />
           <Button type='submit'>Signup</Button>
        </Form>
      </Container>
      )
    }
}
