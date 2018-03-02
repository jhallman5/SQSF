import React from 'react'
import { Media } from 'react-bootstrap'

import Listing from '../components/Listing.js'

export default class Listings extends React.Component {
  render(){
    return (
      <Media.List>
        <Listing />
        <Listing />
        <Listing />
      </Media.List>
    )
  }
}
