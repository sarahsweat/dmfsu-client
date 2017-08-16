import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

  constructor(props) {
    super(props)

    this.state = { activeItem: undefined}
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (

        <Menu fixed='top' color='black' inverted pointing >
          <Link to='/'><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>Home</Menu.Item></Link>
          <Link to='/donate'><Menu.Item name='donate' active={activeItem === 'donate'} onClick={this.handleItemClick}>Donate</Menu.Item></Link>
          <Link to='/signup'><Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>Signup</Menu.Item></Link>
          <Link to='/users'><Menu.Item name='users' active={activeItem === 'users'} onClick={this.handleItemClick}>Fundraisers</Menu.Item></Link>
          <Link to='/teams'><Menu.Item name='teams' active={activeItem === 'teams'} onClick={this.handleItemClick}>Teams</Menu.Item></Link>
        </Menu>

    )
  }
}
