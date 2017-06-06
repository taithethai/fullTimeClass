import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class TripForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
      <div>
        <label htmlFor="startingLocation">Starting Location</label>
        <Field name="startingLocation" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="endingLocation">Ending Location</label>
        <Field name="endingLocation" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="distance">Distance</label>
        <Field name="distance" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <Field name="date" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
      </form>
    );
  }
}

TripForm = reduxForm({
  form: 'log-trip',
})(TripForm);

export default TripForm;