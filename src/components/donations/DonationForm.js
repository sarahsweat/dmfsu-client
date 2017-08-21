import React, { Component } from 'react'
import { Container, Form, Button, Label, Input, Message } from 'semantic-ui-react'

export default class DonationForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      donor_id: undefined,
      dancer_id: undefined,
      amount: undefined,
      message: undefined,
      donation_id: undefined,
      errors: []
    }
  }

  handleChange = (event) => {
    let key = `${event.target.name}`
    let value = `${event.target.value}`
    this.setState({
      [key]: value
    })
  }

  handleDonorDropdown = (e,data) => {
    this.setState({ donor_id: data.value })
  }

  handleDancerDropdown = (e,data) => {
    this.setState({ dancer_id: data.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(process.env.REACT_APP_API + '/donations', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((data) => {
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
      donor_id: undefined,
      dancer_id: undefined,
      amount: '',
      message: '',
      donation_id: ''
    }))
  }

    render(){
      const userOptions = this.props.users.map((user,index) => { return {
        key: index,
        text: `${user.first_name} ${user.last_name}`,
        value: user.id,
        image: {
          avatar: true,
          src: user.photo
        }
      }
    })
      return(
        <Container>
          {this.state.errors.length > 0 ?
            <Message negative>
              <Message.Header>Error</Message.Header>
              <p>{this.state.errors[0]}</p>
            </Message>
            : null }
           <Form size='large' id='donation-form' onSubmit={this.handleSubmit} >
             <Form.Group widths='equal'>
               <Form.Dropdown label="Donor" placeholder='Donor' name='donor_id' value={this.state.donor_id} fluid selection options={userOptions} onChange={this.handleDonorDropdown} />
               <Form.Dropdown label="Dancer" placeholder='Dancer' name='dancer_id' value={this.state.dancer_id} fluid selection options={userOptions} onChange={this.handleDancerDropdown} />
               <Form.Input label="Amount" labelPosition='left' type='text'><Label basic>$</Label><Input name='amount' value={this.state.amount} placeholder='Amount' onChange={this.handleChange}/></Form.Input>
             </Form.Group>
             <Form.Input label="Message" placeholder='Message' name='message' value={this.state.message} onChange={this.handleChange} />
             <Button type='submit'>Make Donation</Button>
           </Form>
        </Container>
      )
    }
}
