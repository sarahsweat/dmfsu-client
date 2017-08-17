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
import { Container, Header, Image, Divider, Statistic, Grid, Card } from 'semantic-ui-react'

import {GGL_MAP_KEY} from '../keys'

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
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${code}&key=${GGL_MAP_KEY}`)
        .then(data => data.json())
        .then(data => this.setState({
          latLongs: [...this.state.latLongs, data.results[0].geometry.location]
        }))
      })
    }
  }

  componentWillMount() {
      let zipcodes = this.props.users.map(user => user.zip)
      zipcodes.forEach((code) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${code}&key=${GGL_MAP_KEY}`)
        .then(data => data.json())
        .then(data => this.setState({
          latLongs: [...this.state.latLongs, data.results[0].geometry.location]
        }))
      })
    }

  render() {
    // console.log(MAP_KEY)
    console.log(process.env)
    // console.log(process.env.REACT_APP_API)
    return (
      this.props.users && this.state.latLongs ?


        <Container textAlign='center' >
          <br/>
          <br/><br/>
          <br/><br/>
          <Card fluid className='bg shadow-box'>
            <Card.Content>
              <Header className='main-title' as='h2' textAlign='center'>Dance Marathon</Header>
              <Header className='main-title' as='h2' textAlign='center'>Florida State University</Header>
              {/* <Header className='main-title' as='h2' textAlign='center'>2018</Header> */}
            </Card.Content>
          </Card>
          {/* <Statistic.Group widths='one'>
            <Statistic size='large' value='Dance Marathon'/>
            <Statistic value='Florida State University'/>
            <Statistic size='large' value='2018'/>
          </Statistic.Group> */}

          <br/>
          <br/>

          <Image src='2017Total.jpg' shape='rounded' className='shadow-box'/>


          <br/>

          <Divider />

          <Stats teams={this.props.teams} users={this.props.users} donations={this.props.donations}/>

          <Divider />

          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Card fluid className='bg shadow-box'>
                  <Card.Content>
                    <Header className='sub-title' as='h1' textAlign='center'>Recent Donations</Header>
                    <DonationList donations={this.props.donations.slice(-5)} />
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid className='bg shadow-box'>
                  <Card.Content>
                    <Header as='h1' className='sub-title' textAlign='center'>Relive DM 2017!</Header>
                    <iframe style={{marginTop: "12"}} className='shadow-box' width="520" height="315" src="https://www.youtube.com/embed/HDK2IhexWQM" allowfullscreen></iframe>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Divider />

          <Card fluid className='bg shadow-box'>
            <Card.Content>
              <Header as='h2' textAlign='center'>See where our donations are coming from!</Header>
              <DonationMap latLongs={this.state.latLongs}/>
            </Card.Content>
          </Card>

          <Divider />

          <Card fluid className='bg shadow-box'>
            <Card.Content>
              <Header as='h2' textAlign='center'>Top Fundraisers</Header>
              <UserList users={this.props.users.sort(function(a,b) {return (a.individual_total < b.individual_total) ? 1 : ((b.individual_total < a.individual_total) ? -1 : 0);} ).slice(0,5)} />
              <br/>
            </Card.Content>
          </Card>

          <Divider />

          <Card fluid className='bg shadow-box'>
            <Card.Content>
              <Header as='h2' textAlign='center'>Top Teams</Header>
              <TeamList teams={this.props.teams.sort(function(a,b) {return (a.team_total < b.team_total) ? 1 : ((b.team_total < a.team_total) ? -1 : 0);} ).slice(0,5)} />
              <br/>
            </Card.Content>
          </Card>

          <Divider />

          <Card fluid className='bg shadow-box'>
            <Card.Content>
              <Header as='h2' textAlign='center'>Miracle Milestones</Header>
              <MilestonesContainer users={this.props.users} data={this.props.data}/>
            </Card.Content>
          </Card>

          <Divider />

          <Card fluid className='bg shadow-box'>
            <Card.Content>
              <Header as='h2' textAlign='center'>Make a Donation!</Header>
              <DonationForm handlePost={this.props.handlePost} users={this.props.users}/>
            </Card.Content>
          </Card>

          <Divider />

          <Card fluid className='bg shadow-box'>
            <Card.Content>
              <Header as='h2' textAlign='center'>Signup to be a Fundraiser!</Header>
              <UserForm handlePost={this.props.handlePost}  teams={this.props.teams}/>
            </Card.Content>
          </Card>

          <Divider />

          <Card fluid className='bg shadow-box'>
            <Card.Content>
              <Header as='h2' textAlign='center'>Our Beneficiaries</Header>
              <Grid divided='vertically'>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Image src='https://samaritanhealth.com/images/CMNHospitals.png' size='medium' centered='true'/>
                  </Grid.Column>
                  <Grid.Column style={{marginTop: "17"}}>

                    <Image src='http://med.fsu.edu/userFiles/image/VERT_COM_Logo%20(1).png' size='huge' />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Content>
          </Card>

          <Divider />



      </Container>

      : null

    )
  }
}
