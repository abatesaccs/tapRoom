import React from 'react';
import { Link } from 'react-router-dom';
import './homeLink.css';


function Header(){
  var style = {
    margin: '0',
    padding: '0',
    color: '#fff'
  };
  return (
    <div>
      <h1 style={style}><Link class='homeLink' to="/glkajlsakjdf">Taproom</Link></h1>
    </div>
  );
}

export default Header;