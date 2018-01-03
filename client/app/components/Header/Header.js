import React, { Component } from 'react'
import { Link } from 'react-router-dom';
//import { Bootstrap, Button, Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap';
//import '../../styles/navbar.css';
import 'semantic-ui-css/semantic.min.css';
import { Input, Menu, Segment } from 'semantic-ui-react'
import RegisterModal from '../Register/Register'
import {createStores, createStore} from 'redux'

const reducer = function(state, action) {
  if(action.type==="INC") {
    state+=action.payload;
  } else if (action.type==="DEC") {
    state-=action.payload;
  }

  return state;
}

const store = createStore(reducer, 0);

store.subscribe(()=>{
  console.log("store changed", store.getState())
})

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DEC", payload: 1});

class Header extends Component {
  constructor() {
    super();
    this.state = {color: 'red'}
    this.menuItem = ['Home', 'Find Teacher', 'Find Student', 'Signup'];
  }
  
  handleItemClick(e, {name}) { 
    this.setState({ activeItem: name});
  }

  render() {
    return (
      <div>
        <Menu pointing secondary size="large">
          <Menu.Item color={this.state.color} as={Link} to='/' name={this.menuItem[0]} active={this.state.activeItem === this.menuItem[0] } onClick={this.handleItemClick.bind(this)} />
          <Menu.Item color={this.state.color} as={Link} to='/helloworld' name={this.menuItem[1]} active={this.state.activeItem === this.menuItem[1] } onClick={this.handleItemClick.bind(this)} />
          <Menu.Item color={this.state.color} as={Link} to='/home' name={this.menuItem[2]} active={this.state.activeItem === this.menuItem[2] } onClick={this.handleItemClick.bind(this)} />
          <Menu.Menu position='right'>
            <RegisterModal name={ this.menuItem[3] }  />
            
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
export default Header;
