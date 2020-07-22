import React from 'react';
import '../styles/Home.css';
import Carousel from '../components/Carousel';
const cars = require('../voitures.json');


export default function Home (props) {

  return (
    <div className='home'>
      <div className='home-text'>
        La bienvenue cher visiteur sur mon site présentant ma collection de véhicules miniatures à différentes échelles.
      </div>
      <div className='novelties'>
        <p>Nouveautés</p>
        <div className='slider'>
          <div className='slider-images'>
            <Carousel cars={cars.data} />
          </div>
        </div>
      </div>
    </div>
  );
}
