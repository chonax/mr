import React from 'react';

import './search-box.styles.css';

const Searchbox = () => (
  <input 
    type='search' 
    placeholder='search monsters' 
    onChange={e => this.setState({ searchField: e.target.value }) } 
  />
)