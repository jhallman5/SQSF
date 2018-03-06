import React from 'react'
import { Media, Button, Badge, Grid, Row, Col, Clearfix } from 'react-bootstrap'

export default class Listing extends React.Component {
  render(){
    console.log('====>', this.props.width)
    return (
      <Button >
        <Media.Left>
          <img className='listing-image' src="./images/defaultPhoto.png" alt="thumbnail" />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Address</Media.Heading>
           <Grid className='media-body'>
            <Row>
              <Col md={6}>
                <Badge>$400,000</Badge>
              </Col>
              <Col md={6}>
                <Badge>4</Badge> Beds
              </Col>
            </Row>
            <Row>
            { this.props.width > 1000 &&
              <Col md={6}>
                <Badge>1200</Badge> sqft
              </Col>
              }
                <Col md={6}>
                  <Badge>4</Badge> Baths
                </Col>

            </Row>
           </Grid>
        </Media.Body>
      </Button >
    )
  }
}



// <div className='media-body'>
//   <div className='media-column'>
//     <div className='media-item'><Badge>4</Badge> Beds</div>
//     <div className='media-item'><Badge>4</Badge> Bath</div>
//   </div>
//   <div className='media-column1'>
//     <div className='media-item'><Badge>1400</Badge> Sqft</div>
//     <div className='media-item'><Badge>$400,000</Badge></div>
//   </div>
// </div>
