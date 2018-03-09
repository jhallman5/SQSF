import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import Listings from './Listings'
import Map from './Map'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
     };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render(){
    return (
      <Grid fluid>
        <Row>
          <Col md={6}>
            <Listings width={this.state.width} />
          </Col>
          { this.state.width > 1000 &&
            <Col md={6}>
            <Map
              isMarkerShown
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDhMv9OI_9ABuLNbT_SasnE56B2aTnvHX4&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `90vh` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            </Col>
          }
        </Row>
      </Grid>
    )
  }
}
