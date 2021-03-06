import React, { Component } from 'react';
import HomeContainer from './components/HomeContainer'
import MilestonePageContainer from './components/milestones/MilestonePageContainer'
import DonateContainer from './components/donations/DonateContainer'
import UserContainer from './components/users/UserContainer'
import SignupContainer from './components/users/SignupContainer'
import UserProfileContainer from './components/users/UserProfileContainer'
import TeamProfileContainer from './components/teams/TeamProfileContainer'
import TeamContainer from './components/teams/TeamContainer'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DonationMap from './components/DonationMap'
import NotFound from './components/NotFound'

class App extends Component {
  constructor() {
    super()

    this.state = {
      teams: [],
      donations: [],
      users: [],
      currentUsers: [],
      userSearchTerm: '',
      currentTeams: [],
      teamSearchTerm: '',
      data: []
    }
  }

  componentDidMount = () => {
    fetch(process.env.REACT_APP_API + '/users')
    .then(data => data.json())
    .then(users => this.setState({users, currentUsers: users}))

    fetch(process.env.REACT_APP_API + '/teams')
    .then(data => data.json())
    .then(teams => this.setState({teams, currentTeams: teams}))

    fetch(process.env.REACT_APP_API + '/donations')
    .then(data => data.json())
    .then(donations => this.setState({donations}))

    fetch(process.env.REACT_APP_API + '/graph')
    .then(data => data.json())
    .then(data => this.setState({data}))
  }

  handlePost = () => {
    fetch(process.env.REACT_APP_API + '/donations')
    .then(data => data.json())
    .then(donations => this.setState({ donations }))

    fetch(process.env.REACT_APP_API + '/users')
    .then(data => data.json())
    .then(users => this.setState({users, currentUsers: users}))

    fetch(process.env.REACT_APP_API + '/teams')
    .then(data => data.json())
    .then(teams => this.setState({teams, currentTeams: teams}))

    fetch(process.env.REACT_APP_API + '/graph')
    .then(data => data.json())
    .then(data => this.setState({data}))
  }

  handleUserSearch = (event) => {
    const searchTerm = event.target.value
    let searchResults = this.state.users.filter( user => {
      return user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    this.setState({
      currentUsers: searchResults
    })
  }

  handleTeamSearch = (event) => {
    const searchTerm = event.target.value
    let searchResults = this.state.teams.filter( team => {
      return team.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    this.setState({
      currentTeams: searchResults
    })
  }

  render() {
    return (
      <Router>
        <div className='paralax' >
          <div className='home-bg'>
            <Route path='/' render={() => {return <NavBar/>}} />
            <Switch>
              <Route exact path='/' render={({match}) => {return <HomeContainer users={this.state.users} teams={this.state.teams} donations={this.state.donations} handlePost={this.handlePost} data={this.state.data} match={match}/>}}/>
              <Route exact path='/donate' render={() => {return <DonateContainer handlePost={this.handlePost} users={this.state.users}/>}} />
              <Route exact path='/signup' render={({history, match}) => {return <SignupContainer teams={this.state.teams} handlePost={this.handlePost} history={history} match={match}/>}} />
              <Route exact path='/users' render={() => {return <UserContainer handleSearch={this.handleUserSearch} users={this.state.currentUsers}/>}} />
              <Route exact path='/teams' render={() => {return <TeamContainer handleSearch={this.handleTeamSearch} teams={this.state.currentTeams} handlePost={this.handlePost}/>}} />
              <Route path='/users/:id' render={() => {return <UserProfileContainer users={this.state.users} teams={this.state.teams} donations={this.state.donations} handlePost={this.handlePost} />}} />
              <Route path='/teams/:id' render={() => {return <TeamProfileContainer handlePost={this.handlePost} />}} />
              <Route exact path='/milestones' render={() => {return <MilestonePageContainer users={this.state.users} data={this.state.data} />}} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
