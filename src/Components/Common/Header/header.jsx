import React from 'react';
import './style.css';
import AnchorTemporaryDrawer from './Mob-drawer';


const header = () => {
  return (
    <div className='navbar'>
      <h1 className='title'>CryptoTracker</h1>
      <div className='links'>
        <a href="/">
          <p className='link'>Home</p>
        </a>
        <a href="/">
          <p className='link'>Compare</p>
        </a>
        <a href="/">
          <p className='link'>Watchlist</p>
        </a>
        <a href="/">
          <p className='link'>Dashboard</p>
        </a>
      </div>
      <div className='mob-drawer'>
        <AnchorTemporaryDrawer />
      </div>
    </div>
  )
}

export default header
