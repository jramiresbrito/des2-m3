/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Country from './Country';

export default class Countries extends Component {
  render() {
    const { countries } = this.props;
    return (
      <>
        <ul>
          {countries.map((country) => {
            return (
              <li key={country.id}>
                <Country country={country} />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
