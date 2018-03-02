import React from 'react'
import { Media } from 'react-bootstrap'

export default class Listing extends React.Component {
  render(){
    return (
      <Media.ListItem>
        <Media.Left>
          <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Media heading</Media.Heading>
          <p>
            Cras sit
          </p>
        </Media.Body>
      </Media.ListItem>
    )
  }
}
