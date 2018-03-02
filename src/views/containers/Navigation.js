import React from 'react'
import { Navbar, Nav, NavDropdown, NavItem, MenuItem, Button } from 'react-bootstrap'

import Filters from './Filters'
import Sorts from './Sorts'

export default class Navigation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showFilters: false,
      showSorts: false,
    }
    this.toggleFilters = this.toggleFilters.bind(this)
    this.toggleSorts = this.toggleSorts.bind(this)
  }

  toggleFilters(){
    this.setState({ showFilters: !this.state.showFilters})
  }

  toggleSorts(){
    this.setState({ showSorts: !this.state.showSorts})
  }

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
          <Nav>
          <NavItem onClick={this.toggleFilters}>Filter</NavItem>
          { this.state.showFilters &&
            <Filters />
          }
          </Nav>
          <Nav>
          <NavItem onClick={this.toggleSorts}>Sort</NavItem>
          { this.state.showSorts &&
            <Sorts />
          }
          </Nav>
        </Nav>
      </Navbar>
    )
  }
}
