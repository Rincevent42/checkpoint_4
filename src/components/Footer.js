import React, { useState, useContext } from 'react';
import FilterContext from './FilterContext';
import { useHistory } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer (props) {
  const history = useHistory();
  const { updateFilter } = useContext(FilterContext);

  const handleClick = (filter) => {
    updateFilter(filter);
    history.push('/display?filtre=' + filter)
  }

  return (
    <div className='footer'>
      <div className='menu'>
        <ul className='ul-container'>
          <li className='li-items'><a key='filterAll' onClick={() => handleClick('all')}>Toutes les miniatures</a></li>
          <li className='li-items'><a key='filterAll' onClick={() => handleClick('43')}>1/43e</a></li>
          <li className='li-items'><a key='filterAll' onClick={() => handleClick('32')}>1/32e « Slot cars »</a></li>
          <li className='li-items'><a key='filterAll' onClick={() => handleClick('50')}>1/50e</a></li>
        </ul>
      </div>
    </div>
  );
}
