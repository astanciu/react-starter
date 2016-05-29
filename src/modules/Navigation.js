import React from 'react'
import NavLink from './NavLink'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export default React.createClass({

  render(){
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink className="navbar-brand" to="/"><img width="25px" src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" /></NavLink>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/about"><NavItem eventKey={1} >About</NavItem></LinkContainer>
          <LinkContainer to="/items"><NavItem eventKey={2}>Items</NavItem></LinkContainer>
          <NavDropdown eventKey={3} title="Items Direct" id="basic-nav-dropdown">
            <LinkContainer to="/items/first"><MenuItem eventKey={3.1}>first</MenuItem></LinkContainer>
            <LinkContainer to="/items/second"><MenuItem eventKey={3.2}>Second</MenuItem></LinkContainer>
            <MenuItem divider />
            <LinkContainer to="/items/second/edit"><MenuItem eventKey={3.3}>Second/Edit</MenuItem></LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
})