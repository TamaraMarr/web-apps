import React, { Component } from 'react';
import './App.css';
import { MapWithAMarker } from "./Map";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 44,
      lng: 20
    }
  }

  showMap(lat, lng) {
    this.setState({
      lat,
      lng
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" style={{ fontSize: "2em" }}>Maps</h1>
        </header>
        <MapWithAMarker
          center={{ lat: this.state.lat, lng: this.state.lng }}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <button onClick={() => { this.showMap(35.6895, 139.6917) }}>Japan</button>
        <button onClick={() => { this.showMap(55.7558, 37.6173) }}>Russia</button>
        <button onClick={() => { this.showMap(48.8566,2.3522) }}>France</button>
      </div>
    );
  }
}

export default App;
