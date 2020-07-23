import React, { useEffect, useContext } from 'react';
import Slideshow from '../components/SlideShow';
import FilterContext from '../components/FilterContext';
import axios from 'axios';
import '../styles/Home.css';
require('dotenv').config();


// console.log(cars.data[0].url_photo);

// ===========================================
// CREATE STYLES OBJECT
// ===========================================
const s = {
  container: "screenW screenH dGray col",
  header: "flex1 fCenter fSize2",
  main: "flex8 white",
  footer: "flex1 fCenter"
};

export default function Home (props) {

  // const { cars, updateCars } = useContext(FilterContext);
  const { novelties, updateNovelties } = useContext(FilterContext);

  useEffect(() => {
    /* const cars = require('../voitures.json');
    updateCars(cars.data);
    console.log(cars.data); */

    axios.get('http://localhost:3000/cars/novelties')
      .then(data => {
        updateNovelties(data.data.data);
      })
      .catch(error => {
        console.error('Erreur durant la récupération des nouveautés :', error);
      });
  }, [updateNovelties]);

  // ===========================================
  // SLIDES DATA
  // ===========================================
  const slides = novelties.map(car => `/photos/${car.url_photo}`);
  console.log('Slides : ', slides);

  return (
    <div className='home'>
      <div className='home-text'>
        La bienvenue cher visiteur sur mon site présentant ma collection de véhicules miniatures à différentes échelles.
      </div>
      <div className='novelties'>
        <p>Nouveautés</p>
        <div className={s.container}>
          <div className={s.main}>
            <Slideshow slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
}
