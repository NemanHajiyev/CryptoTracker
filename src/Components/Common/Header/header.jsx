import React from 'react';
import './style.css';
import AnchorTemporaryDrawer from './Mob-drawer';
import Button from '../Butoon/button';


const header = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <h1 className='title'>CryptoTracker<span style={{ color: "var(--blue)" }}>.</span></h1>
        <div className='links'>
          <a href="/">
            <p className='link'>Home</p>
          </a>
          <a href="/compare">
            <p className='link'>Compare</p>
          </a>
          <a href="/dashboard">
            <Button
              text={"Dashboard"}
            />
          </a>
        </div>
        <div className='mob-drawer'>
          <AnchorTemporaryDrawer />
        </div>
      </div>
    </div>
  )
}

export default header
