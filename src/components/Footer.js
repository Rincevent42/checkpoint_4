import React, { useState, useContext } from 'react';
import '../styles/Footer.css';
import FilterContext from './FilterContext';
import { useHistory } from 'react-router-dom';

export default function Footer (props) {
  const history = useHistory();
  const { updateFilter } = useContext(FilterContext);

  const handleClick = (filter) => {
    updateFilter(filter);
    history.push('/display')
  }

  return (
    <div className='footer'>
      <div className='menu'>
        <ul>
          <li><a key='filterAll' onClick={() => handleClick('all')}>Toutes les miniatures</a></li>
          <li><a key='filterAll' onClick={() => handleClick('43')}>1/43e</a></li>
          <li><a key='filterAll' onClick={() => handleClick('32')}>1/32e « Slot cars »</a></li>
          <li><a key='filterAll' onClick={() => handleClick('50')}>1/50e</a></li>
        </ul>
      </div>
    </div>
  );
}
