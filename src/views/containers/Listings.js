import React from 'react'
import { connect }  from 'react-redux'
import { Pager } from 'react-bootstrap'

import { fetchData, fetchMock } from '../actions'

import Listing from '../components/Listing.js'
import Pagination from './Pagination'

class Listings extends React.Component {
  constructor(props) {
    super(props)
    this.fetchData = this.fetchData.bind(this)
  }

  fetchData(){
    this.props.fetchData()
    console.log(this.props)
  }

  componentWillMount() {
    this.props.fetchMock()
  }

  render(){
    let listings = []
    for(let i = 0; i < 10; i++) {
      listings.push(<Listing width={this.props.width} key={i} number={i}/>)
    }
    console.log('Props: ', this.props)

    return (
      <div>
        {listings.slice(4 * this.props.page, (4 * this.props.page) + 4)}
        <Pagination page={this.props.page}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listings: state.listings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData()),
    fetchMock: () =>  dispatch(fetchMock())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Listings)
