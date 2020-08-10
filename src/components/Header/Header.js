import React from 'react';
import formatNumber from '../../Helpers/formatHelpers';
import css from './header.module.css';

export default function Header({
  filter,
  totalPopulation,
  countryCount,
  onChangeFilter,
}) {
  const handleInputChange = (event) => {
    const newText = event.target.value;
    onChangeFilter(newText);
  };

  return (
    <div className={css.flexRow}>
      <input
        placeholder="Insert a Country..."
        type="text"
        value={filter}
        onChange={handleInputChange}
      />
      <span className={css.countries}>
        | Países:
        <strong>
          &nbsp;
          {countryCount}
        </strong>
        &nbsp;
      </span>
      <span className={css.population}>
        | População:
        <strong>
          &nbsp;
          {formatNumber(totalPopulation)}
        </strong>
      </span>
    </div>
  );
}
