import React from 'react';

export default function Header({ filter, onChangeFilter }) {
  const handleInputChange = (event) => {
    const newText = event.target.value;
    onChangeFilter(newText);
  };

  return (
    <div>
      <input type="text" value={filter} onChange={handleInputChange} />
      <span>| Países: </span>
      <span>| População: </span>
    </div>
  );
}
