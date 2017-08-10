import React, { Component } from 'react'
import { Container, Form, Button } from 'semantic-ui-react'

export default class DonationForm extends Component {
  state = {
      donor_id: 0,
      dancer_id: 0,
      amount: 0,
      message: '',
      donation_id: 0
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
    fetch('http://localhost:3000/api/v1/donations', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
      }
    })
    //.then(() => this.props.handlePost())
  }

    render(){
      return(
        <Container>
           <Form size='large' id='donation-form' onSubmit={this.handleSubmit} >
             <Form.Input label='Donor' name='donor_id' onChange={this.handleChange} />
             <Form.Input label='Dancer' name='dancer_id' onChange={this.handleChange} />
             <Form.Input label='Amount' name='amount' onChange={this.handleChange} />
             <Form.Input label='Message' name='message' onChange={this.handleChange} />
             <Button type='submit'>Make Donation</Button>
           </Form>
        </Container>
      )
    }
}
