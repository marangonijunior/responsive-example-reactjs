import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './map.scss';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 53.1026865,
        lng: -2.4568627
      },
      zoom: 11
    };
  }

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;