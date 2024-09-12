import React, { useState } from 'react';
import RadioContext from './RadioContext';
import PropTypes from 'prop-types';

export function RadioProvider({ children }) {
  const [selectedRadio, setSelectedRadio] = useState(null);

  return (
    <RadioContext.Provider value={{ selectedRadio, setSelectedRadio }}>
      {children}
    </RadioContext.Provider>
  );
}
RadioProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };