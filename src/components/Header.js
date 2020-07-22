import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header (props) {
  return (
    <div className='header'>
      <div className='title'>
        <Link style={{ textDecoration: 'none', color: 'var(--white)' }} to='/'>MODELCARS</Link>
      </div>
    </div>
  );
}
