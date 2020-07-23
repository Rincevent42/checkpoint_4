import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FilterContext from '../components/FilterContext';
import '../styles/Header.css';

export default function Carousel (props) {
  const history = useHistory();
  const { cars, filter } = useContext(FilterContext);

  const handleClickToDetails = (id) => {
    history.push('/details/' + id);
  };

  const carsList = (filter !== 'all' ? cars.filter(car => car.scale === filter) : cars);

  return carsList.map(car => car.url_photo && <div key={car.id}><a onClick={() => handleClickToDetails(car.id)}><img className='photo' src={require('../photos/' + car.url_photo)} alt={car.model} /></a></div>);
}
