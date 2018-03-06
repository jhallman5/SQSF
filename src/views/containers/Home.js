import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'

import Listings from './Listings'

import { fetchData } from '../actions'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.fetchData = this.fetchData.bind(this)
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

  render(){
    return (
      <Grid fluid>
        <Row>
          <Col md={6}>
            <Listings />
          </Col>
          { this.state.width > 1000 &&
            <Col className='listing-map' md={6}>
              <div> Map </div>
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
