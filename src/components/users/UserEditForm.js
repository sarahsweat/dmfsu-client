import React, { Component } from 'react'
import { Container, Form, Button, Label, Input, Modal, Icon, Message } from 'semantic-ui-react'

export default class UserEditForm extends Component {
  constructor(props){
    super()

    this.state = {
      modalOpen: false,
      user: { }
    }
  }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

    componentWillMount() {
      fetch(process.env.REACT_APP_API + `/users/${window.location.pathname.slice(7)}`)
      .then(data => data.json())
      .then(user => this.setState({user}))
    }

    handleChange = (event) => {
      let key = `${event.target.name}`
      let value = `${event.target.value}`
      this.setState({
        user:{
          [key]: value
        }
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      fetch(process.env.REACT_APP_API + `/users/${window.location.pathname.slice(7)}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: window.location.pathname.slice(7),
          first_name: event.target[0].value,
          last_name: event.target[1].value,
          goal: event.target[2].value,
          email: event.target[3].value,
          zip: event.target[4].value,
          team_id: this.state.user.team,
          photo: event.target[5].value,
          bio: event.target[6].value
        }),
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .then(() => {
        fetch(process.env.REACT_APP_API + `/users/${window.location.pathname.slice(7)}`)
        .then(data => data.json())
        .then(user => this.setState({user}))
      })
      .then(() => this.props.handlePost())
      .then(() => this.props.handlePut())
    }

    handleTeamDropdown = (e,data) => {
      this.setState({ user: {team: data.value }})
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
        this.state.user ?
        <Container centered='true' textAlign='center'>
          <Modal trigger={<Button onClick={this.handleOpen}>Edit this fundraiser!</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          >
          <Modal.Header as='h2' textAlign='center'>Edit this fundraiser!</Modal.Header>
          <Modal.Content className='bg'>
           <Form size='large' id='donation-form' onSubmit={this.handleSubmit} >
            <Form.Group widths='equal'>
             <Form.Input label='First Name' name='first_name' value={this.state.user.first_name} onChange={this.handleChange} />
             <Form.Input label='Last name' name='last_name' value={this.state.user.last_name} onChange={this.handleChange} />
             <Form.Input label='Goal' type='number' labelPosition='left'><Label basic>$</Label><Input name='goal' value={this.state.user.goal} onChange={this.handleChange}/></Form.Input>
           </Form.Group>
           <Form.Group widths='equal'>
             <Form.Input label='Email' name='email' value={this.state.user.email} onChange={this.handleChange} />
             <Form.Input label='Zipcode' name='zip' value={this.state.user.zip} onChange={this.handleChange} />
             <Form.Dropdown label="Team" placeholder='Team' name='team_id' value={this.state.user.team_id} fluid selection options={teamOptions} onChange={this.handleTeamDropdown} />
             <Form.Input label='Photo Link' name='photo' value={this.state.user.photo} onChange={this.handleChange} />
            </Form.Group>
           <Form.Input label='Bio' name='bio' value={this.state.user.bio} onChange={this.handleChange} />
           <Button type='submit'>Click Here to Save Changes</Button>
         </Form>
       </Modal.Content>
       <Modal.Actions>
          <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Close Window
          </Button>
        </Modal.Actions>
       </Modal>
      </Container>
      : null
      )
    }
}
