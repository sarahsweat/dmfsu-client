import React, { Component } from 'react';
import UserList from './users/UserList'
import TeamList from './teams/TeamList'
import DonationList from './donations/DonationList'
import DonationForm from './donations/DonationForm'
import { Container, Header, Image, Divider } from 'semantic-ui-react'

import '../index.css'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <br/><br/>
        <Container>

          <Header as='h1' textAlign='center'>Dance Marathon at Florida State University 2018 </Header>

          <Image src='2017Total.jpg' />

          <Divider />

          <Header as='h2' textAlign='center'>Fundraisers</Header>

          <UserList users={this.props.users} />

          <Divider />

          <Header as='h2' textAlign='center'>Teams</Header>

          <TeamList teams={this.props.teams} />

          <Divider />

          <Header as='h2' textAlign='center'>Donations</Header>

          <DonationList donations={this.props.donations} />

          <Divider />

          <Header as='h2' textAlign='center'>Make a Donation!</Header>

          <DonationForm />

          <Divider />

      </Container>
      </div>

    )
  }
}
