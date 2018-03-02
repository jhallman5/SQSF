import React from 'react'
import { connect } from 'react-redux'

import Listings from './Listings'

import { fetchData } from '../actions'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  fetchData(){
    this.props.fetchData()
  }

  render(){
    console.log(this.state.width)
    return (
      <div className='home'>
        <div className="listing-col">
          <Listings />
        </div>
        { this.state.width > 750 &&
          <div className="listing-map">
            <div> Map </div>
          </div>
        }
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
