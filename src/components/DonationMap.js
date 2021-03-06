import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';

const Balloon = () => <img width="25" src='http://speedwaymiracletournament.com/Images/cmnh-logo-no-text.png'/>;

export default class DonationMap extends Component {
  constructor(props){
    super()
  }

  render() {
    return (
      <Container style={{width: '100%', height: '450px'}}>
        <GoogleMapReact center={{lat: 36.7, lng: -91}} defaultZoom={4}>
          {this.props.latLongs.map((place,index) => (
            <Balloon key={index} lat={place.lat} lng={place.lng} />
          ))}
        </GoogleMapReact>
      </Container>
    );
  }
}
