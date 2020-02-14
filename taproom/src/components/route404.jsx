import React from 'react';
import { Link } from 'react-router-dom';


function Route404(props){
  var errorStyle = {
    textAlign: 'center'
  };
  return (
    <div style={errorStyle}>
      <h1>404</h1>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

export default Route404;