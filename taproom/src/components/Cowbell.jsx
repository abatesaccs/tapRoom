import React from 'react';
import CowbellImg from '../assets/images/cowbell.gif';


function Cowbell(){
  var style = {
    margin: 'auto'
  };
  return (
    <div style={style}>
      <img src={CowbellImg} alt="Cowbell"/>
    </div>
  );
}

export default Cowbell;