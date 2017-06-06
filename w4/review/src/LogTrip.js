import React, { Component } from 'react';
import TripForm from './TripForm';

class LogTrip extends Component {
  logTrip(tripDetails) {
    console.log(tripDetails);
  }
  render() {
    return (
      <div>
        <TripForm handleSubmit={this.logTrip} />
      </div>);
  }
}

export default LogTrip;
