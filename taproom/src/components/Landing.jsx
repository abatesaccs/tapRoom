import React from 'react';
import { Link } from 'react-router-dom';


function Landing(){
  var errorStyle = {
    textAlign: 'center'
  };
  var landingSize = {
    fontSize: '6vh'
  };
  return (
    <div style={errorStyle}>
      <h1 style={landingSize}>Tipsy Toms Terrible Taproom</h1>
      <h3><Link to="/">Menu</Link></h3>
    </div>
  );
}

export default Landing;