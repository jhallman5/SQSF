import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12.4}
    defaultCenter={{ lat: 37.7525, lng: -122.4476 }}
  >
   {props.isMarkerShown && <Marker position={{ lat: 37.7749, lng: 122.4194 }} />}
  </GoogleMap>
))

export default MyMapComponent
