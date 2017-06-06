import React, { Component } from 'react';
import { connect } from 'react-redux';
class Trips extends Component {
  render() {
    return (
      <div className="App">
        {this.props.trips.map((trip, i) => {
          return (
            <div key={i}>
              <h3>Trip {i + 1}</h3>
              <div><p>Starting Location: </p>{trip.startingLocation}</div>
              <div><p>Ending Location: </p>{trip.endingLocation}</div>
              <div><p>Distance: </p>{trip.distance}</div>
              <div><p>Date: </p>{trip.date}</div>
            </div>
            );
        })}
      </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips,
  }
}

export default connect(mapStateToProps)(Trips);