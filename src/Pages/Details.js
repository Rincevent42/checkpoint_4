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

  // Mise en forme de la date d'achat
  let purchaseDate = '';
  if (cars.date_of_purchase) {
    const d = cars.date_of_purchase;
    purchaseDate = d.substring(8, 10) + '/' + d.substring(5, 7) + '/' + d.substring(0, 4);
  }

  const title = 'Détails pour ' + cars.mark + ' ' + cars.model + ' (' + cars.year + ')';
  
  // const purchaseDate =  // new Date(cars.date_of_purchase);

  return (
    <div className='details'>
      <h1>{title}</h1>
      <div key={cars.id}><img className='photo' src={`/photos/${cars.url_photo}`} alt={cars.model} /></div>
      <div className='details-container'>
        <div className='details-item1'>
          <h2>Modèle à l'échelle 1</h2>
          <p>Marque : {cars.mark}</p>
          <p>Modèle : {cars.model}</p>
          <p>Année de production : {cars.year}</p>
          <p>Période de production : {cars.period_of_production}</p>
        </div>
        <div className='details-item2'>
          <h2>Miniature à l'échelle 1/{cars.scale}e</h2>
          <p>Fabricant : {cars.maker}</p>
          <p>Référence : {cars.material_number}</p>
          <p>Couleur : {cars.color_name}</p>
          <p>Date d'achat : {purchaseDate}</p>
        </div>
        
      </div>
    </div>
    
  );
}
