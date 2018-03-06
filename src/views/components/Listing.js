import React from 'react'
import { Media, Button, Badge } from 'react-bootstrap'

export default class Listing extends React.Component {
  render(){
    return (
      <Button >
        <Media.Left>
          <img width={200} height={125} src="./images/defaultPhoto.png" alt="thumbnail" />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Address</Media.Heading>
           <div className='media-body'>
            <div className='media-column'>0</div>
            <div className='media-column1'>1</div>
           </div>
        </Media.Body>
      </Button >
    )
  }
}



// <div className='media-body'>
//   <div className='media-column'>
//     <div className='media-item'><Badge>4</Badge> Beds</div>
//     <div className='media-item'><Badge>4</Badge> Bath</div>
//   </div>
//   <div className='media-column1'>
//     <div className='media-item'><Badge>1400</Badge> Sqft</div>
//     <div className='media-item'><Badge>$400,000</Badge></div>
//   </div>
// </div>
