import React from 'react'
import { Pager } from 'react-bootstrap'

import Listing from '../components/Listing.js'
import Pagination from './Pagination'

export default class Listings extends React.Component {
  render(){
    let listings = []
    for(let i = 0; i < 10; i++) {
      listings.push(<Listing width={this.props.width} number={i}/>)
    }

    return (
      <div>
        {listings}
        <Pagination />
      </div>
    )
  }
}
