import React from 'react'
import { connect } from 'react-redux'

import Listings from './Listings'

import { fetchData } from '../actions'

class Home extends React.Component {

  fetchData(){
    this.props.fetchData()
  }

  render(){
    return (
      <Listings />
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
