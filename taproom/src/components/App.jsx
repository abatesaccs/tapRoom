import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Route404';
import Background from '../assets/images/TaproomBackground2.png';
import Landing from './Landing';
import KegList from './KegList';
import AddKeg from './AddKeg';
import Cowbell from './Cowbell';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {}
    };
    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this);
  }

  handleAddingNewKeg(newKeg){
    var newKegId = v4();
    console.log(this.state.masterKegList);
    var newMasterKegList = Object.assign({}, 
    this.state.masterKegList, {
      [newKegId]: newKeg
    });
    console.log(this.state.masterKegList);
    this.setState({masterKegList: newMasterKegList});
    console.log(this.state.masterKegList);
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
            <Route path='/menu' render={()=><KegList kegList={this.state.masterKegList} />} />
            <Route path='/addKeg' render={()=><AddKeg onNewKegCreation={this.handleAddingNewKeg} />} />
            <Route path='/cowbell' component={Cowbell} /> {/* easter egg */} 
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}
 
export default App;
