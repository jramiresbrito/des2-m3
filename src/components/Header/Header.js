import React from 'react';
import formatNumber from '../../Helpers/formatHelpers';

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
    <div>
      <input type="text" value={filter} onChange={handleInputChange} />
      <span>
        | Países:
        {countryCount}
        &nbsp;
      </span>
      <span>
        | População:
        {formatNumber(totalPopulation)}
      </span>
    </div>
  );
}
