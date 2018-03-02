import React from 'react'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'

export default class Navigation extends React.Component {

  render(){
    return (
      <Navbar >
        <Navbar.Header >
          <Navbar.Brand>
            <a href='#'>SQSF</a>
          </Navbar.Brand>
          <Navbar.Text>
            consider more
          </ Navbar.Text>
        </Navbar.Header>
        <Nav pullRight>
          <NavDropdown title="Primary" id="basic-nav-dropdown">
            <MenuItem>Price</MenuItem>
            <MenuItem>School Rating</MenuItem>
          </NavDropdown>
          <NavDropdown title="Secondary" id="basic-nav-dropdown">
            <MenuItem>Price</MenuItem>
            <MenuItem>School Rating</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}
