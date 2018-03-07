import React from 'react'
import { Pager} from 'react-bootstrap'

export default class Pagination extends React.Component {

  render(){
    return (
      <Pager>
        <Pager.Item previous href='#'>Previous</Pager.Item>
        Page {this.props.page + 1}
        <Pager.Item next href='#'>Next</Pager.Item>
      </Pager>
    )
  }
}
