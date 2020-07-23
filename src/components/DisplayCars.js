import React, { useContext } from 'react';
import FilterContext from '../components/FilterContext';
import '../styles/Header.css';

export default function Carousel (props) {
  const { cars, filter } = useContext(FilterContext);

  console.log(cars);
  const carsList = (filter !== 'all' ? cars.filter(car => car.scale === filter) : cars);
  console.log(carsList);

  return carsList.map(car => <div key={car.id}><img className='photo' src={require('../photos/' + car.url_photo)} alt={car.model} /></div>);
}