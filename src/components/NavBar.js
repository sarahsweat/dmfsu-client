import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = { activeItem: undefined}
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    window.scrollTo(0,0)
  }

  render() {
    const { activeItem } = this.state
    return (

        <Menu fixed='top' color='black' inverted pointing>
          <Link to='/'><Menu.Item className='nav-font' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>Home</Menu.Item></Link>
          <Link to='/milestones'><Menu.Item className='nav-font' name='milestones' active={activeItem === 'milestones'} onClick={this.handleItemClick}>Milestones</Menu.Item></Link>
          <Link to='/users'><Menu.Item className='nav-font' name='users' active={activeItem === 'users'} onClick={this.handleItemClick}>Fundraisers</Menu.Item></Link>
          <Link to='/teams'><Menu.Item className='nav-font' name='teams' active={activeItem === 'teams'} onClick={this.handleItemClick}>Teams</Menu.Item></Link>
          <Link to='/donate'><Menu.Item className='nav-font' name='donate' active={activeItem === 'donate'} onClick={this.handleItemClick}>Donate</Menu.Item></Link>
          <Link to='/signup'><Menu.Item className='nav-font' name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>Signup</Menu.Item></Link>

          <Menu.Menu position='right'>
            <a href='http://dmatfsu.tumblr.com/' target='_blank'><Menu.Item position='right'><Icon className='icon-black' name='tumblr' size='large'/></Menu.Item></a>
            <a href='https://www.youtube.com/user/DMatFSU' target='_blank'><Menu.Item position='right'><Icon className='icon-black' name='youtube play' size='large'/></Menu.Item></a>
            <a href='https://twitter.com/DM_FSU' target='_blank'><Menu.Item position='right'><Icon className='icon-black' name='twitter' size='large'/></Menu.Item></a>
            <a href='https://www.instagram.com/dmfsu/' target='_blank'><Menu.Item position='right'><Icon className='icon-black' name='instagram' size='large'/></Menu.Item></a>
            <a href='https://www.facebook.com/dmfsu' target='_blank'><Menu.Item position='right'><Icon className='icon-black' name='facebook f' size='large'/></Menu.Item></a>
          </Menu.Menu>
        </Menu>

    )
  }
}
