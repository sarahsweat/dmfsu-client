import React from 'react'
import { Header, Container, Image, Progress, Grid, Divider, Statistic } from 'semantic-ui-react'
import UserList from '../users/UserList'
import { Link } from 'react-router-dom'
import UserEditForm from './UserEditForm'
import DonationList from '../donations/DonationList'




export default class UserProfileContainer extends React.Component {
  constructor(props) {
    super(props)

  this.state = {
      user: {}
    }
  }

  componentWillMount() {
    fetch(`http://localhost:3000/api/v1/users/${window.location.pathname.slice(7)}`)
    .then(data => data.json())
    .then(user => this.setState({user}))
  }

  render() {
    const userDonations = this.props.donations.filter( d =>  d.dancer_id === this.state.user.id)
    const rank = this.props.users.sort(function(a,b) {return (a.individual_total < b.individual_total) ? 1 : ((b.individual_total < a.individual_total) ? -1 : 0);}).indexOf(this.state.user)
    return (
      this.state.user.donations_received ?
      <Container>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image src={this.state.user.photo} centered='true' size='large' shape='rounded'/>
            </Grid.Column>
            <Grid.Column>
              <Header as='h1' textAlign='center'>{this.state.user.first_name} {this.state.user.last_name}</Header>
              <Header as='h3' textAlign='center'>Team: <Link to={`/teams/${this.state.user.team.id}`}> {this.state.user.team.name}</Link>  ~  Total Raised: ${this.state.user.individual_total.toLocaleString()}</Header>
              <Header as='h4' textAlign='center'>{this.state.user.bio}</Header>
              <Header as='h3' textAlign='center'>{this.state.user.first_name} has a goal of ${this.state.user.goal.toLocaleString()}  and has raised: ${this.state.user.individual_total.toLocaleString()} so far!</Header>
              <Progress percent={Math.round((this.state.user.individual_total / this.state.user.goal)*100)} progress success />
              {this.state.user.individual_total > 1000 ? <Header as='h1' textAlign='center'>COMMA CLUB MEMBER!!</Header> : null }
              <Image src='comma.png'/>
              <Statistic.Group>
                <Statistic>
                  <Statistic.Value> {userDonations.length}</Statistic.Value>
                  <Statistic.Label>Donations</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>${this.state.user.individual_total.toLocaleString()}</Statistic.Value>
                  <Statistic.Label>Raised</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Label>Overall Rank</Statistic.Label>
                  <Statistic.Value>{rank}</Statistic.Value>
                </Statistic>
              </Statistic.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
        <UserEditForm handlePost={this.props.handlePost}  teams={this.props.teams}/>
        <Divider />
        <Header as='h1' textAlign='center'>{this.state.user.first_name}'s Donations</Header>
        <DonationList donations={userDonations.slice(10)} />
      </Container>
      : null
    )
  }
}
