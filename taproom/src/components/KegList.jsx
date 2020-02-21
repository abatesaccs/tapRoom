import React from 'react';
import Keg from './Keg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './homeLink.css';

var tmpKegList = [  
  {  
    brewery: 'Brewery',
    name: 'Brewery\'s Best',
    alcoholContent: '9001 ABV',
    category: 'Lager',
    price: '$3.50'
  },
  {  
    brewery: 'Brewery',
    name: 'Brewery\'s Best',
    alcoholContent: '9001 ABV',
    category: 'Lager',
    price: '$3.50'
  },
  {  
    brewery: 'Brewery',
    name: 'Brewery\'s Best',
    alcoholContent: '9001 ABV',
    category: 'Lager',
    price: '$3.50'
  },
  {  
    brewery: 'Brewery',
    name: 'Brewery\'s Best',
    alcoholContent: '9001 ABV',
    category: 'Lager',
    price: '$3.50'
  }
];

var addStyle = {
  marginTop: '5vh'
};

function KegList(props) {
  return (
    <div>
      {Object.keys(props.kegList).map(function(kegId) {
        var keg = props.kegList[kegId];
        return <Keg brewery={keg.brewery}
          name={keg.name}
          abv={keg.abv}
          category = {keg.category}
          price = {keg.price}
          key = {kegId}
          kegId = {kegId}/>;
      })}
      <div style={addStyle}>
        <Link className='addLink' to='/addKeg'>Add Keg</Link>
      </div>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object
};

export default KegList;