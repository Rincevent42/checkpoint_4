import React from 'react';
import '../styles/Home.css';

export default function Home (props) {
  return (
    <div className='home'>
      <div className='home-text'>
        La bienvenue cher visiteur sur mon site présentant ma collection de véhicules miniatures à différentes échelles.
      </div>
      <div className='novelties'>
        <p>Nouveautés</p>
      </div>
    </div>
  );
}
