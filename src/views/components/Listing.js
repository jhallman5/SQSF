import React from 'react'
import { Media, Button } from 'react-bootstrap'

export default class Listing extends React.Component {
  render(){
    return (
      <Button >
        <Media.Left>
          <img width={200} height={125} src="./images/defaultPhoto.png" alt="thumbnail" />
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
