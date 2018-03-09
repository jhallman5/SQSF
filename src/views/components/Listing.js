import React from 'react'
import { Media, Button, Badge, Grid, Row, Col, Clearfix } from 'react-bootstrap'

export default class Listing extends React.Component {
  render(){
    return (
      <Button >
        <Media.Left>
          <img className='listing-image' src="./images/defaultPhoto.png" alt="thumbnail" />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Address {this.props.info.response.results[0].address}</Media.Heading>
           <Grid className='media-body'>
            <Row>
              <Col md={6}>
                <Badge>$400,000</Badge>
              </Col>
              <Col md={6}>
                <Badge>{this.props.info.response.results[0].bedrooms}</Badge> Beds
              </Col>
            </Row>
            <Row>
            { this.props.width > 1000 &&
              <Col md={6}>
                <Badge>{this.props.info.response.results[0].finishedSqFt}</Badge> sqft
              </Col>
              }
                <Col md={6}>
                  <Badge>{this.props.info.response.results[0].bathrooms}</Badge> Baths
                </Col>
            </Row>
            <Row>
              <Col mdOffset={6}>
                <a href='http://www.zillow.com/'>
                  <img src="http://www.zillow.com/widgets/GetVersionedResource.htm?path=/static/logos/Zillowlogo_200x50.gif" width="200" height="50" alt="Zillow Real Estate Search" />
                </a>
              </Col>
            </Row>
           </Grid>
        </Media.Body>
      </Button >
    )
  }
}
