import React from 'react'
import { Media, Button } from 'react-bootstrap'

export default class Listing extends React.Component {
  render(){
    return (
      <Button >
        <Media.Left>
          <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Media heading</Media.Heading>
          <p>
            Cras siiyr
          </p>
        </Media.Body>
      </Button >
    )
  }
}
