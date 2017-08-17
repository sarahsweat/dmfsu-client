import React from 'react'
import { Header, Container, Image, Grid, Progress, Card } from 'semantic-ui-react'
import UserList from '../users/UserList'



export default class TeamProfileContainer extends React.Component {
  constructor(props) {
    super(props)

  this.state = {
      team: {}
    }
  }

  componentWillMount() {
    fetch(process.env.REACT_APP_API + `/teams/${window.location.pathname.slice(7)}`)
    .then(data => data.json())
    .then(team => this.setState({team}))
  }

  render() {
    return (
      this.state.team.dancers ?
        <Container  centered='true' textAlign='center'>
          <br/><br/>
          <br/><br/>
        
          <Card fluid className='bg shadow-box'>
            <Card.Content>
              <Grid divided='vertically'>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Image src={this.state.team.photo} size='massive' centered='true' className='shadow-box'/>
                  </Grid.Column>
                  <Grid.Column>
                    <Header className='main-title' as='h1' textAlign='center'>{this.state.team.name}</Header>
                    <Header as='h3' textAlign='center'>Total Raised: ${this.state.team.team_total.toLocaleString()}</Header>
                    <Header as='h4' textAlign='center'>{this.state.team.bio}</Header>
                    <Header as='h3' textAlign='center'>{this.state.team.name} has a goal of ${this.state.team.goal.toLocaleString()}  and has raised: ${this.state.team.team_total.toLocaleString()} so far!</Header>
                    <Progress percent={Math.round((this.state.team.team_total / this.state.team.goal)*100)} progress success />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Header as='h2' textAlign='center'>{this.state.team.name}'s dancers</Header>
              <UserList users={this.state.team.dancers} />

            </Card.Content>
          </Card>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </Container>
      : null

    )
  }
}
