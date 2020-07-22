import React, { useState, useContext } from 'react';
import '../styles/Footer.css';
import FilterContext from '../components/FilterContext';
import '../styles/Display.css';

const cars = require('../voitures.json');

export default function Display (props) {

  const { filter } = useContext(FilterContext);

  console.log('Filter : ', filter);

  return (
    <div className='display'>
      <p>Display</p>
    </div>
  );
}
