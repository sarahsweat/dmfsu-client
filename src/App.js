import React, { Component } from 'react';
import HomeContainer from './components/HomeContainer'


class App extends Component {
  constructor() {
    super()

    this.state = {
      teams: [],
      donations: [],
      users: []
    }
  }

  componentWillMount = () => {
     fetch('http://localhost:3000/api/v1/users')
     .then(data => data.json())
     .then(users => this.setState({users: users}))
     .then(users => console.log(this.state.users))

     fetch('http://localhost:3000/api/v1/teams')
     .then(data => data.json())
     .then(teams => this.setState({teams}))

     fetch('http://localhost:3000/api/v1/donations')
     .then(data => data.json())
     .then(donations => this.setState({donations}))
  }

  render() {

    return (
      <div>
        <HomeContainer users={this.state.users} teams={this.state.teams} donations={this.state.donations}/>
      </div>
    );
  }
}

export default App;
