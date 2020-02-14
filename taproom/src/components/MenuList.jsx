import React from 'react';
import Menu from './Menu';

var tmpKegList = [  
  {  
    brewery: 'Brewery',
    name: 'Brewery\'s Best',
    alcoholContent: '9001%',
    category: 'Lager',
    price: '$3.50'
  },
  {  
    brewery: 'Brewery',
    name: 'Brewery\'s Best',
    alcoholContent: '9001%',
    category: 'Lager',
    price: '$3.50'
  },
  {  
    brewery: 'Brewery',
    name: 'Brewery\'s Best',
    alcoholContent: '9001%',
    category: 'Lager',
    price: '$3.50'
  },
  {  
    brewery: 'Brewery',
    name: 'Brewery\'s Best',
    alcoholContent: '9001%',
    category: 'Lager',
    price: '$3.50'
  }
];

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
    </div>
  );
}

export default MenuList;