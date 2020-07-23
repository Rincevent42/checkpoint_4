import React, { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import FilterContext from '../components/FilterContext';
import axios from 'axios';
import '../styles/Details.css';

export default function Details (props) {
  const { cars, updateCars } = useContext(FilterContext);
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:3000/cars/' + id)
      .then(data => {
        updateCars(data.data.data);
      })
      .catch(error => {
        console.error('Erreur durant la récupération des données :', error);
      });
  }, []);

    const title = 'Détails pour ' + cars.mark + ' ' + cars.model + ' (' + cars.year + ')';

  return (
    <div className='details'>
      {title}
    </div>
    
    );
}
