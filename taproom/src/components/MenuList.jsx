import React from 'react';
import Menu from './Menu';
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

function MenuList() {
  return (
    <div>
      {tmpKegList.map((menu, index) => 
        <Menu brewery={menu.brewery}
          name={menu.name}
          alcoholContent={menu.alcoholContent}
          category = {menu.category}
          price = {menu.price}
          key = {index}/>
      )}
      <div style={addStyle}>
        <Link className='addLink' to='/addKeg'>Add Keg</Link>
      </div>
    </div>
  );
}

export default MenuList;