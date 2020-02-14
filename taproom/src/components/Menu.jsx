import React from 'react';
import PropTypes from 'prop-types';

function Menu(props){
  var paragraphPadding = {
    padding: '0',
    margin: '0'
  };
  var headerPadding = {
    marginTop: '0'
  };
  return (
    <div>
      <h5 style={headerPadding}>{props.brewery} - {props.name}</h5>
      <p style={paragraphPadding}>{props.category} - <em>{props.alcoholContent}</em></p>
      <p style={paragraphPadding}>{props.price}</p>
    </div>
  );
}

Menu.propTypes = {
  brewery: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string
};

export default Menu;