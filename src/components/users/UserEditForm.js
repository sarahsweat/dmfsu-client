import React, { Component } from 'react'
import { Header, Container, Form, Button, Label, Input } from 'semantic-ui-react'

export default class UserEditForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: {
        id: '',
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
    }

  }

    componentWillMount() {
      fetch(`http://localhost:3000/api/v1/users/${window.location.pathname.slice(7)}`)
      .then(data => data.json())
      .then(user => this.setState({user}))
    }

    handleChange = (event) => {
      let key = `${event.target.name}`
      let value = `${event.target.value}`
      this.setState({
        user: {
          [key]: value
        }
      })

    }

    handleSubmit = (event) => {
      event.preventDefault()
      fetch(`http://localhost:3000/api/v1/users/${window.location.pathname.slice(7)}`, {
        method: 'PUT',
        body: JSON.stringify({id: window.location.pathname.slice(7), goal: 2000}),
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .then(() => this.props.handlePost())
      .then(() => this.setState({
        user: {
          id: '',
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
      }))
    }

    handleTeamDropdown = (e,data) => {
      this.setState({ user: {team_id: data.value} })
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
          <Header as='h2' textAlign='center'>Edit this fundraiser!</Header>
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
             <Button type='submit'>Save</Button>
           </Form>
        </Container>
      )
    }
}
