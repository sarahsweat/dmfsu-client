import React, { Component } from 'react';
import HomeContainer from './components/HomeContainer'
import DonationForm from './components/donations/DonationForm'
import UserForm from './components/users/UserForm'
import UserContainer from './components/users/UserContainer'
import UserProfileContainer from './components/users/UserProfileContainer'
import TeamProfileContainer from './components/teams/TeamProfileContainer'
import TeamContainer from './components/teams/TeamContainer'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Redirect, Link, Switch} from 'react-router-dom'


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
      teamSearchTerm: ''
    }
  }

  componentWillMount = () => {
     fetch('http://localhost:3000/api/v1/users')
     .then(data => data.json())
     .then(users => this.setState({users, currentUsers: users}))

     fetch('http://localhost:3000/api/v1/teams')
     .then(data => data.json())
     .then(teams => this.setState({teams, currentTeams: teams}))

     fetch('http://localhost:3000/api/v1/donations')
     .then(data => data.json())
     .then(donations => this.setState({donations}))
  }

  handlePost = () => {
    fetch('http://localhost:3000/api/v1/donations')
    .then(data => data.json())
    .then(donations => this.setState({ donations }))

    fetch('http://localhost:3000/api/v1/users')
    .then(data => data.json())
    .then(users => this.setState({users, currentUsers: users}))

    fetch('http://localhost:3000/api/v1/teams')
    .then(data => data.json())
    .then(teams => this.setState({teams, currentTeams: teams}))
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
        <div>
          <Route path='/' render={() => {return <NavBar/>}} />
          <Route exact path='/' render={() => {return <HomeContainer users={this.state.users} teams={this.state.teams} donations={this.state.donations} handlePost={this.handlePost}/>}}/>
          <Route path='/donate' render={() => {return <DonationForm handlePost={this.handlePost} users={this.state.users}/>}} />
          <Route path='/signup' render={() => {return <UserForm teams={this.state.teams} handlePost={this.handlePost}/>}} />
          <Route exact path='/users' render={() => {return <UserContainer handleSearch={this.handleUserSearch} users={this.state.currentUsers}/>}} />
          <Route exact path='/teams' render={() => {return <TeamContainer handleSearch={this.handleTeamSearch} teams={this.state.currentTeams}/>}} />
          <Route path='/users/:id' render={() => {return <UserProfileContainer users={this.state.users} teams={this.state.teams} donations={this.state.donations} />}} />
          <Route path='/teams/:id' render={() => {return <TeamProfileContainer />}} />
        </div>
      </Router>
    
    );
  }
}

export default App;
