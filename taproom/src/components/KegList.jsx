import React from 'react';
import Keg from './Keg';
import { Link } from 'react-router-dom';
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

function KegList() {
  return (
    <div>
      {tmpKegList.map((eg, index) => 
        <Keg brewery={Keg.brewery}
          name={Keg.name}
          alcoholContent={Keg.alcoholContent}
          category = {Keg.category}
          price = {Keg.price}
          key = {index}/>
      )}
      <div style={addStyle}>
        <Link className='addLink' to='/addKeg'>Add Keg</Link>
      </div>
    </div>
  );
}

export default KegList;