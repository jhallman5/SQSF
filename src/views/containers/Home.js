import React from 'react'
import { connect } from 'react-redux'

import { fetchData } from '../actions'

class Home extends React.Component {

  fetchData(){
    this.props.fetchData()
  }

  render(){
    return (
      <div>
        <h1>React app up and running.</h1>
        <button onClick={this.fetchData.bind(this)}>API</button>
      </div>
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
