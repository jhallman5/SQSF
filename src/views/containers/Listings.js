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

  componentDidMount() {
    this.props.fetchMock()
  }

  render(){
    return (
      <div>
        {
          this.props.listings.slice(this.props.listingsPerPage * this.props.page, (this.props.listingsPerPage * this.props.page) + this.props.listingsPerPage)
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
    page: state.pagination.currentPage,
    listingsPerPage: state.pagination.listingsPerPage,
    maxPage: state.pagination.maxPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData()),
    fetchMock: () =>  dispatch(fetchMock())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Listings)
