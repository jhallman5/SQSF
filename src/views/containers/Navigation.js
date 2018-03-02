import React from 'react'
import { Navbar, Nav, NavDropdown, MenuItem, Button } from 'react-bootstrap'

import Filters from './Filters'

export default class Navigation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showFilters: false
    }
    this.toggleFilters = this.toggleFilters.bind(this)
  }

  toggleFilters(){
    this.setState({ showFilters: !this.state.showFilters})
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
          <Button onClick={this.toggleFilters}>Filters</Button>
          { this.state.showFilters &&
            <Filters />
          }
        </Nav>
      </Navbar>
    )
  }
}
