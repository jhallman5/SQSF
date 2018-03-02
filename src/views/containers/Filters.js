import React from 'react'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'

export default class Filters extends React.Component {

  render(){
    return (
      <Nav>
        <NavDropdown title="Primary" id="basic-nav-dropdown">
          <MenuItem>Price</MenuItem>
          <MenuItem>School Rating</MenuItem>
        </NavDropdown>
        <NavDropdown title="Secondary" id="basic-nav-dropdown">
          <MenuItem>Price</MenuItem>
          <MenuItem>School Rating</MenuItem>
        </NavDropdown>
      </Nav>
    )
  }
}
