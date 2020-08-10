/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import css from './countries.module.css';

export default class Country extends Component {
  render() {
    const { country } = this.props;
    const { name, flag } = country;
    return (
      <div className={`${css.box} ${css.country}`}>
        <img src={flag} alt={name} />
        <span>{name}</span>
      </div>
    );
  }
}
