import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Route404';
import Background from '../assets/images/TaproomBackground2.png';
import Landing from './Landing';
import MenuList from './MenuList';
import AddKeg from './AddKeg';
import Cowbell from './Cowbell';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []

    };
    this.hanleAddingNewKeg = this.hanleAddingNewKeg.bind(this);
  }

  render(){
    var style = {  
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + Background + ')',
      backgroundPosition: 'fixed',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      minHeight: '100vh',
      minWidth: '100%',
      color: 'white',
      fontFamily: 'IBM Plex Sans, sans-serif',
      fontWeight: '200'
    };
    return (
      <div style={style}>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/menu' component={MenuList} />
            <Route path='/addKeg' component={AddKeg}/>
            <Route path='/cowbell' component={Cowbell}/> {/* easter egg */} 
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}
 
export default App;
