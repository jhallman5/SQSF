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
    return (
      <div>
        {
          this.props.listings.slice(4 * this.props.page, (4 * this.props.page) + 4)
            .map((listing, i) => <Listing width={this.props.width} key={i} info={listing} /> )
        }
        <Pagination />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listings: state.listings,
    page: state.pagination
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData()),
    fetchMock: () =>  dispatch(fetchMock())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Listings)
