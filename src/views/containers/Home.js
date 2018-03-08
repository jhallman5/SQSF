import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'

import Listings from './Listings'
import Map from './Map'

import { fetchData } from '../actions'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      page: 0
     };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.fetchMock = this.fetchMock.bind(this)
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

  fetchData(){
    this.props.fetchData()
    console.log(this.props)
  }

  fetchMock(){
    this.props.fetchMock()
    console.log(this.props)
  }

  render(){
    return (
      <Grid fluid>
        <Row>
          <Col md={6}>
            <Listings width={this.state.width} page={this.state.page} />
            <button onClick={this.fetchData}>API</button>
            <button onClick={this.fetechMock}>Mock</button>
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

const mapStateToProps = state => {
  return {
    data: state.sample
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
