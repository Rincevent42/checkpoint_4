import React, { useContext } from 'react';
import FilterContext from '../components/FilterContext';
import '../styles/Header.css';

export default function Carousel (props) {
  const { cars, filter } = useContext(FilterContext);

  console.log(cars);
  const carsList = cars.filter(car => car.scale === filter);
  console.log(carsList);

  return (
    <div>
      <p>Cars</p>
    </div>
  );
}