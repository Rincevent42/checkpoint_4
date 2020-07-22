import React from 'react';
import '../styles/Header.css';

export default function Carousel (props) {
  return (
    <div>
      {props.cars.map(car => {
        return <img src={require(`../photos/${car.url_photo}`)} alt={car.model} key={car.id} />;
      })}
    </div>
  );
}