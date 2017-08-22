import React, { Component } from 'react'
import { Header, Container, Form, Button, Label, Input, Modal, Icon } from 'semantic-ui-react'

export default class TeamEditForm extends Component {

  constructor(props){
    super()

    this.state = {
      modalOpen: false,
      team: { }
    }
  }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  componentWillMount() {
    fetch(process.env.REACT_APP_API + `/teams/${window.location.pathname.slice(7)}`)
    .then(data => data.json())
    .then(team => this.setState({team}))
    .then(team => console.log(this.state.team))
  }

  handleChange = (event) => {
    let key = `${event.target.name}`
    let value = `${event.target.value}`
    this.setState({
      team: {
        [key]: value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(process.env.REACT_APP_API + `/teams/${window.location.pathname.slice(7)}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: window.location.pathname.slice(7),
        name: event.target[0].value,
        goal: event.target[1].value,
        photo: event.target[2].value,
        bio: event.target[3].value
      }),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
      }
    })
    .then(() => {
      fetch(process.env.REACT_APP_API + `/teams/${window.location.pathname.slice(7)}`)
      .then(data => data.json())
      .then(team => this.setState({team}))
    })
    .then(() => this.props.handlePost())
    .then(() => this.props.handlePut())
  }



    render(){
      return(
        <Container>
          <Modal trigger={<Button onClick={this.handleOpen}>Edit this team!</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          >
            <Modal.Header as='h2' textAlign='center'>Edit this Team!</Modal.Header>
            <Modal.Content className='bg'>
              <Form size='large' id='team-form' onSubmit={this.handleSubmit} >
                <Form.Group widths='equal'>
                  <Form.Input label='Team Name' name='name' value={this.state.team.name} onChange={this.handleChange} />
                  <Form.Input label='Goal' labelPosition='left' type='text'><Label basic>$</Label><Input name='goal' value={this.state.team.goal} onChange={this.handleChange}/></Form.Input>
                  <Form.Input label='Photo Link' name='photo' value={this.state.team.photo} onChange={this.handleChange} />
                </Form.Group>
                <Form.Input label='Bio' name='bio' value={this.state.team.bio} onChange={this.handleChange} />
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
      )
    }
}
