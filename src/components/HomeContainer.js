import React, { Component } from 'react';
import UserList from './users/UserList'
import TeamList from './teams/TeamList'
import TeamForm from './teams/TeamForm'
import DonationList from './donations/DonationList'
import DonationForm from './donations/DonationForm'
import UserForm from './users/UserForm'
import Stats from './stats/Stats'
import MilestonesContainer from './milestones/MilestonesContainer'
import DonationMap from './DonationMap'
import { Container, Header, Image, Divider, Statistic, Grid } from 'semantic-ui-react'

import '../index.css'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      latLongs: []
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("Old  Props", this.props)
    console.log("New Props", nextProps)

    if (nextProps.users.length > this.props.users.length) {

      let zipcodes = nextProps.users.map(user => user.zip)
      console.log("next props > old props", zipcodes)
      zipcodes.forEach((code) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${code}&key=AIzaSyDwvMDZA0JJr6QbhLJukzFHh3FKFisQDnw`)
        .then(data => data.json())
        .then(data => this.setState({
          latLongs: [...this.state.latLongs, data.results[0].geometry.location]
        }))
      })
    }
  }

  render() {

    return (
      this.props.users && this.state.latLongs ?
      <div>
      <br/><br/>
        <Container  textAlign='center' >
          <br/>
          <Statistic.Group widths='one'>
            <Statistic size='large' value='Dance Marathon'/>
            <Statistic value='Florida State University'/>
            <Statistic size='large' value='2018'/>
          </Statistic.Group>

          <br/>

          <Image src='2017Total.jpg' shape='rounded' className='shadow-box'/>


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
                <iframe style={{marginTop: "12"}} className='shadow-box' width="560" height="315" src="https://www.youtube.com/embed/HDK2IhexWQM" allowfullscreen></iframe>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Divider />

          <Header as='h2' textAlign='center'>See where our donations are coming from!</Header>
          <DonationMap latLongs={this.state.latLongs}/>

          <Divider />

          <Header as='h2' textAlign='center'>Top Fundraisers</Header>
          <UserList users={this.props.users.sort(function(a,b) {return (a.individual_total < b.individual_total) ? 1 : ((b.individual_total < a.individual_total) ? -1 : 0);} ).slice(0,5)} />
          <br/>

          <Divider />

          <Header as='h2' textAlign='center'>Top Teams</Header>
          <TeamList teams={this.props.teams.sort(function(a,b) {return (a.team_total < b.team_total) ? 1 : ((b.team_total < a.team_total) ? -1 : 0);} ).slice(0,5)} />
          <br/>

          <Divider />

          <Header as='h2' textAlign='center'>Miracle Milestones</Header>
          <MilestonesContainer users={this.props.users} data={this.props.data}/>

          <Divider />

          <DonationForm handlePost={this.props.handlePost} users={this.props.users}/>

          <Divider />

          <UserForm handlePost={this.props.handlePost}  teams={this.props.teams}/>

          <Divider />

          <Header as='h2' textAlign='center'>Our Beneficiaries</Header>
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image src='https://samaritanhealth.com/images/CMNHospitals.png' size='medium' centered='true'/>
              </Grid.Column>
              <Grid.Column style={{marginTop: "3"}}>

                <Image src='http://med.fsu.edu/userFiles/image/VERT_COM_Logo%20(1).png' size='huge' />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Divider />



      </Container>
      </div>
      : null

    )
  }
}
