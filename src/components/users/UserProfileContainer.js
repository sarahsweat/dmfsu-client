import React from 'react'
import { Header, Container, Image, Progress, Grid} from 'semantic-ui-react'
import DonationList from '../donations/DonationList'
import { Link } from 'react-router-dom'



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
    .then(state => console.log(this.state.user.donations_received))
  }

  render() {

    return (
      this.state.user.donations_received ?
      <Container>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image src={this.state.user.photo} size='medium' centered='true'/>
            </Grid.Column>
            <Grid.Column>
              <Header as='h1' textAlign='center'>{this.state.user.first_name} {this.state.user.last_name}</Header>
              <Header as='h3' textAlign='center'>Team: <Link to={`/teams/${this.state.user.team.id}`}> {this.state.user.team.name}</Link>  ~  Total Raised: ${this.state.user.individual_total.toLocaleString()}</Header>
              <Header as='h4' textAlign='center'>{this.state.user.bio}</Header>
              <Header as='h3' textAlign='center'>{this.state.user.first_name} has a goal of ${this.state.user.goal.toLocaleString()}  and has raised: ${this.state.user.individual_total.toLocaleString()} so far!</Header>
              <Progress percent={Math.round((this.state.user.individual_total / this.state.user.goal)*100)} progress success />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {/* <DonationList donations={this.state.user.donations_received.map(d => {this.props.donations.filter(donation => donation.id === d.id)})} /> */}
      </Container>
      : null

    )
  }
}
