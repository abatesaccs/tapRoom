import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { getThemeProps } from '@material-ui/styles';

const cardPosition = {
  marginLeft: '35hv',
  textAlign: 'center'
};


const useStyles = makeStyles({
  root: {
    minWidth: '5vw',
    width: '40vw',
    maxWidth: '500px',
    marginTop: '5vh',
    height: '500px',
    paddingBottom: '5vh',
    margin: 'auto'
  },
  button: {
    margin: 'auto'
  }
});

function AddKeg(props){
  const classes = useStyles();
  let _brewery = null; 
  let _name = null;
  let _abv = null;
  let _category = null;
  let _price = null;

  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({brewery: _brewery.value, name: _name.value, abv: _abv.value, category: _category.value, price: _price.value});
    _brewery.value = ''; 
    _name.value = '';
    _abv.value = '';
    _category.value = '';
    _price.value = '';
  }

  return(
    <div style={cardPosition}>
      <Card className={classes.root} variant='outlined'>
        <CardContent>
          {/* <form onSubmit={handleNewKegSubmission}>
            <h3>Add Keg</h3>
            <TextField id="filled-basic" type='text' label="Brewery" variant="filled" ref={(TextField) => {_brewery = TextField;}} />
            <br/><br/>
            <TextField id="filled-basic" type='text' label="Name" variant="filled" ref={(TextField) => {_name = TextField;}} />
            <br/><br/>
            <TextField id="filled-basic" type='text' label="ABV" variant="filled" ref={(TextField) => {_abv = TextField;}} />
            <br/><br/>
            <TextField id="filled-basic" label="Category" variant="filled" type='text' ref={(TextField) => {_category = TextField;}} />
            <br/><br/>
            <TextField id="filled-basic" type='text' label="Price" variant="filled" ref={(TextField) => {_price = TextField;}} />
            <br/><br/>
            <Button className={classes.button} variant='contained' size='medium' color='secondary' type='submit'>Enter</Button>
          </form> */}

          <form onSubmit={handleNewKegSubmission}>
            <input
              type='text'
              id='brewery'
              placeholder='Brewery'
              ref={(input) => {_brewery = input;}}/>
            <input
              type='text'
              id='name'
              placeholder='name'
              ref={(input) => {_name = input;}}/>
            <input
              type='text'
              id='abv'
              placeholder='ABV'
              ref={(input) => {_abv = input;}}/>
            <input
              type='text'
              id='category'
              placeholder='Category'
              ref={(input) => {_category = input;}}/>
            <input
              type='text'
              id='price'
              placeholder='Price'
              ref={(input) => {_price = input;}}/>
            <button type='submit'>Help!</button>
          </form>

        </CardContent>
        {/* <CardActions> */}
        {/* <Button className={classes.button} variant='contained' size='medium' color='#33c9dc' type='submit'>Enter</Button> */}
        {/* </CardActions> */}
      </Card>
    </div>
  );
}

AddKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default AddKeg;