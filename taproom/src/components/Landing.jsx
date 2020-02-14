import React from 'react';
import { Link } from 'react-router-dom';
import './homeLink.css';


function Landing(){
  var errorStyle = {
    textAlign: 'center'
  };
  var landingSize = {
    fontSize: '6vh'
  };
  return (
    <div style={errorStyle}>
      <h1 style={landingSize}>Tipsy Tom's Terrible Taproom</h1>
      <h3><Link className='homeLink' to="/menu">Menu</Link></h3>
      {/* <h3><Link className='homeLink' to='/garbage'>404</Link></h3> */}
    </div>
  );
}

export default Landing;