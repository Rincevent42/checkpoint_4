import React from 'react';
import Slideshow from '../components/SlideShow';
import '../styles/Home.css';

const cars = require('../voitures.json');

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

// ===========================================
// SLIDES DATA
// ===========================================
const slides = [
  require('../photos/' + cars.data[0].url_photo),
  require('../photos/' + cars.data[1].url_photo),
  require('../photos/' + cars.data[2].url_photo),
  require('../photos/' + cars.data[3].url_photo),
  require('../photos/' + cars.data[4].url_photo)];

export default function Home (props) {

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
