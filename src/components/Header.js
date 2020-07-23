import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Header.css';
import FilterContext from './FilterContext';

export default function Header (props) {
  const history = useHistory();
  const { updateFilter } = useContext(FilterContext);

  const handleClickHome = () => {
    history.push('/');
  };

  const handleClick = (filter) => {
    updateFilter(filter);
    history.push('/display?filtre=' + filter);
  };

  return (
    <div className='header'>
      <div className='title'>
        <ul className='ul-container'>
          <li className='li-items'><a key='home' onClick={() => handleClickHome()}>MODELCARS</a></li>
          <li className='li-items'><a key='filterAll' onClick={() => handleClick('all')}>Toutes les miniatures</a></li>
          <li className='li-items'><a key='filter43' onClick={() => handleClick('43')}>1/43e</a></li>
          <li className='li-items'><a key='filter32' onClick={() => handleClick('32')}>1/32e « Slot cars »</a></li>
          <li className='li-items'><a key='filter50' onClick={() => handleClick('50')}>1/50e</a></li>
        </ul>
      </div>
    </div>
  );
}
