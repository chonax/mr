import React from 'react';

import './search-box.styles.css';

export const Searchbox = ({ placeholder, handleChange }) => (
  <input 
    classname='search'
    type='search' 
    placeholder={placeholder} 
    onChange={handleChange} 
  />
)