import React from 'react'
import { connect } from 'react-redux'
import { Pager} from 'react-bootstrap'

import { incrementPage, decrementPage } from '../actions'

class Pagination extends React.Component {
  constructor(props){
    super(props)
    this.incrementPage = this.incrementPage.bind(this)
    this.decrementPage = this.decrementPage.bind(this)

  }

  incrementPage(){
    (this.props.page < this.props.maxPage) ? this.props.incrementPage() : null
  }

  decrementPage(){
    this.props.page ? this.props.decrementPage() : null
  }

  render(){
    return (
      <Pager>
        <Pager.Item previous onClick={this.decrementPage}>Previous</Pager.Item>
        Page {this.props.page + 1}
        <Pager.Item next onClick={this.incrementPage}>Next</Pager.Item>
      </Pager>
    )
  }
}

const mapStateToProps = state => {
  return {
    page: state.pagination,
    maxPage: 2
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementPage: () => dispatch(incrementPage()),
    decrementPage: () =>  dispatch(decrementPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
