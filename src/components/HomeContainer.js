import React, { Component } from 'react';

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Home Container</h1>
        {this.props.users[0].first_name}
      </div>

    )
  }
}
