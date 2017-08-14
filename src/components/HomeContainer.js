import React, { Component } from 'react';
import UserList from './users/UserList'
import TeamList from './teams/TeamList'
import TeamForm from './teams/TeamForm'
import DonationList from './donations/DonationList'
import DonationForm from './donations/DonationForm'
import UserForm from './users/UserForm'
import Stats from './stats/Stats'
import { Container, Header, Image, Divider, Statistic, Grid } from 'semantic-ui-react'

import '../index.css'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <br/><br/>
        <Container textAlign='center'>
          <Statistic.Group widths='one'>
            <Statistic size='large' value='Dance Marathon'/>
            <Statistic value='Florida State University' />
            <Statistic size='large' value='2018' />
          </Statistic.Group>

          <br/>

          <Image src='2017Total.jpg' />

          <br/>

          <Divider />

          <Header as='h2' textAlign='center'>Current Standings</Header>

          <Stats teams={this.props.teams} users={this.props.users} donations={this.props.donations}/>

          <Divider />

          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Header as='h2' textAlign='center'>Recent Donations</Header>
                <DonationList donations={this.props.donations.slice(-5)} />
              </Grid.Column>
              <Grid.Column>
                <Header as='h2' textAlign='center'>Relive DM 2017!</Header>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/HDK2IhexWQM" allowfullscreen></iframe>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Divider />

          <Header as='h2' textAlign='center'>Top Fundraisers</Header>
          <UserList users={this.props.users.sort(function(a,b) {return (a.individual_total < b.individual_total) ? 1 : ((b.individual_total < a.individual_total) ? -1 : 0);} ).slice(0,5)} />

          <Divider />

          <Header as='h2' textAlign='center'>Top Teams</Header>
          <TeamList teams={this.props.teams.sort(function(a,b) {return (a.team_total < b.team_total) ? 1 : ((b.team_total < a.team_total) ? -1 : 0);} ).slice(0,5)} />

          <Divider />

          <DonationForm handlePost={this.props.handlePost} users={this.props.users}/>

          <Divider />

          <UserForm handlePost={this.props.handlePost}  teams={this.props.teams}/>

          <Divider />

          <TeamForm handlePost={this.props.handlePost}/>

          <Divider />

      </Container>
      </div>

    )
  }
}
