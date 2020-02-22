import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

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
    height: '550px',
    paddingBottom: '5vh',
    margin: 'auto'
  },
  button: {
    margin: 'auto'
  }
});

function AddKeg(props){
  const classes = useStyles();

  const [brewery, setBrewery] = useState('');
  const [name, setName] = useState('');
  const [abv, setAbv] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [pints, setPints] = useState('');

  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({brewery: brewery, name: name, abv: abv, category: category, price: price, pints: pints});
  }

  return(
    <div style={cardPosition}>
      <Card className={classes.root} variant='outlined'>
        <CardContent>
          <form onSubmit={handleNewKegSubmission}>
            <h3>Add Keg</h3>
            <TextField id="filled-basic" type='text' label="Brewery" variant="filled" value={brewery} onInput={ e=>setBrewery(e.target.value)} />
            <br/><br/>
            <TextField id="filled-basic" type='text' label="Name" variant="filled" value={name} onInput={ e=>setName(e.target.value)} />
            <br/><br/>
            <TextField id="filled-basic" type='text' label="ABV" variant="filled" value={abv} onInput={ e=>setAbv(e.target.value)} />
            <br/><br/>
            <TextField id="filled-basic" label="Category" variant="filled" type='text' value={category} onInput={ e=>setCategory(e.target.value)} />
            <br/><br/>
            <TextField id="filled-basic" type='text' label="Price" variant="filled" value={price} onInput={ e=>setPrice(e.target.value)} />
            <br/><br/>
            <TextField id="filled-basic" type='text' label="Number of Pints" variant="filled" value={pints} onInput={ e=>setPints(e.target.value)} />
            <br/><br/>
            <Button className={classes.button} variant='contained' size='medium' color='primary' type='submit'>Enter</Button>
          </form>

        </CardContent>
      </Card>
    </div>
  );
}

AddKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default AddKeg;