import React from 'react'
import { Pager} from 'react-bootstrap'

export default class Pagination extends React.Component {

  render(){
    return (
      <Pager>
        <Pager.Item previous href='#'>Previous</Pager.Item>
        <Pager.Item next href='#'>Next</Pager.Item>
      </Pager>
    )
  }
}
