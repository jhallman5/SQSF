import React from 'react'
import { connect } from 'react-redux'
import { Pager} from 'react-bootstrap'

import { incrementPage, decrementPage } from '../actions'

class Pagination extends React.Component {
  render(){
    return (
      <Pager>
        <Pager.Item previous onClick={this.props.decrementPage}>Previous</Pager.Item>
        Page {this.props.page + 1}
        <Pager.Item next onClick={this.props.incrementPage}>Next</Pager.Item>
      </Pager>
    )
  }
}

const mapStateToProps = state => {
  return {
    page: state.pagination
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementPage: () => dispatch(incrementPage()),
    decrementPage: () =>  dispatch(decrementPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
