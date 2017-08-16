import React from 'react'
import { Header, Container, Image, Progress, Grid, Divider, Statistic } from 'semantic-ui-react'
import UserList from '../users/UserList'
import { Link } from 'react-router-dom'
import UserEditForm from './UserEditForm'
import DonationList from '../donations/DonationList'




export default class UserProfileContainer extends React.Component {
  constructor(props) {
    super()

  this.state = {
      user: {}
    }
  }

  componentWillMount() {
    fetch(process.env.REACT_APP_API + `/users/${window.location.pathname.slice(7)}`)
    .then(data => data.json())
    .then(user => this.setState({user}))
  }

  handlePut = () => {
    fetch(process.env.REACT_APP_API + `/users/${window.location.pathname.slice(7)}`)
    .then(data => data.json())
    .then(user => this.setState({user}))
  }

  render() {

    return (
      this.state.user.donations_received ?
      <Container>
        <br/><br/><br/><br/>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column >
              <Image src={this.state.user.photo} centered='true' size='huge' shape='rounded' className='shadow-box'/>
              {this.state.user.individual_total > 1000 ? <Header as='h1' textAlign='center'>COMMA CLUB MEMBER!!</Header> : <br/> }
              <UserEditForm handlePost={this.props.handlePost} handlePut={this.handlePut} teams={this.props.teams}/>

            </Grid.Column>
            <Grid.Column>
              <Header as='h1' textAlign='center'>{this.state.user.first_name} {this.state.user.last_name}</Header>
              <Header as='h3' textAlign='center'>Team: <Link to={`/teams/${this.state.user.team.id}`}> {this.state.user.team.name}</Link></Header>
              <Header as='h4' textAlign='center'>{this.state.user.bio}</Header>
              <Header as='h3' textAlign='center'>{this.state.user.first_name} has a goal of ${this.state.user.goal.toLocaleString()}  and has raised: ${this.state.user.individual_total.toLocaleString()} so far!</Header>
              <Progress percent={Math.round((this.state.user.individual_total / this.state.user.goal)*100)} progress success />
              {/* <Image src='comma.png' size='massive'/> */}
              <Statistic.Group widths={2}>
                <Statistic>
                  <Statistic.Value> {this.state.user.donations_received.length}</Statistic.Value>
                  <Statistic.Label>Donations</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>${this.state.user.individual_total.toLocaleString()}</Statistic.Value>
                  <Statistic.Label>Raised</Statistic.Label>
                </Statistic>
                {/* <Statistic>
                  <Statistic.Label>Overall Rank</Statistic.Label>
                  <Statistic.Value>{}</Statistic.Value>
                </Statistic> */}
              </Statistic.Group>
              <Divider/>
              <Header as='h1' textAlign='center'>{this.state.user.first_name}'s Recent Donations</Header>
              <DonationList donations={this.props.donations.filter(d => d.dancer_id === this.state.user.id).sort(function(a,b) {return (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0);} ).slice(0,5) } />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Image src='../photos/comma.png' />

        <Divider />


      </Container>
      : null
    )
  }
}
