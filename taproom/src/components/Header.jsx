import React from 'react';
import { Link } from 'react-router-dom';
import './homeLink.css';
import logo from '../assets/images/image.png';


function Header(){
  var style = {
    margin: '0',
    padding: '0',
    color: '#fff'
  };
  var imageStyle ={
    maxHeight: '10vh'
  };
  return (
    <div>
      <h1 style={style}><Link class='homeLink' to="/home"><img style={imageStyle} src={logo} alt="4T"/></Link></h1>
    </div>
  );
}

export default Header;