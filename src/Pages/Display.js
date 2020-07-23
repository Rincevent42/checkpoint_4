import React, { useContext, useEffect } from 'react';
import FilterContext from '../components/FilterContext';
import DisplayCars from '../components/DisplayCars';
import axios from 'axios';
import '../styles/Display.css';

export default function Display (props) {
  const { updateCars } = useContext(FilterContext);
  const { filter } = useContext(FilterContext);
  // console.log('Filter : ', filter);

  useEffect(() => {
    axios.get('http://localhost:3000/cars')
      .then(data => {
        updateCars(data.data.data);
      })
      .catch(error => {
        console.error('Erreur durant la récupération des données :', error);
      });
  }, [updateCars]);

  // Création du titre de la page en fonction du filtrage
  let titrePage = 'Toutes les miniatures';
  switch (filter) {
    case '43':
      titrePage += ' au 1/43e';
      break;
    case '32':
      titrePage += ' au 1/32e « Slot Car »';
      break;
    case '50':
      titrePage += ' au 1/50e';
      break;
    default:
      titrePage += '';
  }

  return (
    <div className='display'>
      <p>
        {titrePage}
      </p>
      <div className='nav-main'>
        {/* <nav>
          <p>
          Menu de navigation
          </p>
        </nav> */}
        <main>
          <cars>
            <DisplayCars />
          </cars>
        </main>
      </div>
      
    </div>
  );
}
