import React from 'react';
import './Header.css';
import Logo from '../assets/holberton-logo.jpg';

export const Header = () => {
  return (
    <header className='header'>
      <img src={Logo} alt='logo' />
      <h1>School dashboard</h1>
    </header>
  );
}
