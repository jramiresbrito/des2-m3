/* eslint-disable no-undef */
import React, { Component } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
      filter: '',
      filteredCountries: [],
      filteredPopulation: 0,
    };
  }

  async componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';
    const res = await fetch(url);
    const json = await res.json();
    const allCountries = json.map(({ name, numericCode, flag, population }) => {
      return {
        id: numericCode,
        name,
        filterName: name.toLowerCase(),
        flag,
        population,
      };
    });

    const filteredPopulation = this.calculateTotalPopulationFrom(allCountries);

    this.setState({
      allCountries,
      filteredCountries: Object.assign([], allCountries),
      filteredPopulation,
    });
  }

  calculateTotalPopulationFrom = (countries) => {
    const totalPopulation = countries.reduce((acc, current) => {
      return acc + current.population;
    }, 0);

    return totalPopulation;
  };

  handleChangeFilter = (newText) => {
    this.setState({
      filter: newText,
    });

    const filterLowerCase = newText.toLowerCase();

    const filteredCountries = this.state.allCountries.filter((country) => {
      return country.filterName.includes(filterLowerCase);
    });

    const filteredPopulation = this.calculateTotalPopulationFrom(
      filteredCountries
    );

    this.setState({
      filteredCountries,
      filteredPopulation,
    });
  };

  render() {
    const { filteredCountries, filteredPopulation, filter } = this.state;

    return (
      <>
        <div className="container">
          <h1>React Countries</h1>
          <Header
            filter={filter}
            countryCount={filteredCountries.length}
            onChangeFilter={this.handleChangeFilter}
            totalPopulation={filteredPopulation}
          />
          <Countries countries={filteredCountries} />
        </div>
      </>
    );
  }
}
