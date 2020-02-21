import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  var paragraphMidPadding = {
    padding: '0',
    margin: '0'
  };
  var paragraphBotPadding = {
    padding: '0',
    marginTop: '0'
  };
  var headerPadding = {
    marginTop: '0',
    marginBottom: '0'
  };
  var text = {
    fontFamily: 'Quicksand, sans-serif'
  };
  return (
    <div style={text}>
      <h4 style={headerPadding}>{props.brewery} - {props.name}</h4>
      <p style={paragraphMidPadding}>{props.category} - <em>{props.abv}</em></p>
      <p style={paragraphBotPadding}>{props.price}</p>
    </div>
  );
}

Keg.propTypes = {
  brewery: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  abv: PropTypes.string,
  price: PropTypes.string.isRequired,
  kegId: PropTypes.string
};

export default Keg;