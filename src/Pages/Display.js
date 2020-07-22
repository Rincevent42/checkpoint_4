import React, { useContext } from 'react';
import FilterContext from '../components/FilterContext';
import DisplayCars from '../components/DisplayCars';
import '../styles/Display.css';

export default function Display (props) {

  const { filter } = useContext(FilterContext);

  console.log('Filter : ', filter);

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
        <nav>
          <p>
          Menu de navigation
          </p>
        </nav>
        <main>
          <p>Affichage des véhicules</p>
          <cars>
            <DisplayCars />
          </cars>
        </main>
      </div>
      
    </div>
  );
}
