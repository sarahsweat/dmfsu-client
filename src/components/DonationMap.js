import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';

const Balloon = () => <img width="25" src='http://speedwaymiracletournament.com/Images/cmnh-logo-no-text.png'/>;

export default class DonationMap extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <Container style={{width: '100%', height: '400px'}}>
      <GoogleMapReact
        center={{lat: 37, lng: -91}}
        defaultZoom={4}
      >
        {this.props.latLongs.map(place => (
          <Balloon lat={place.lat} lng={place.lng} />
        ))}

        {/* <PlaceMapPoint
          lat={this.props.currentUserLat}
          lng={this.props.currentUserLong}
          text='your set location'
          linkTo={`/places/search`}
          icon='target'
        />


        {this.props.allPlaces.map(place => (<PlaceMapPoint
          lat={place.lat}
          lng={place.long}
          text={place.name}
          linkTo={`/places/${place.id}`}
          icon='circle'
        />))} */}

      </GoogleMapReact>
    </Container>
    );
  }
}
