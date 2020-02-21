import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

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

function AddKeg(){
  const classes = useStyles();
  return(
    <div style={cardPosition}>
      <Card className={classes.root} variant='outlined'>
        <CardContent>
          <form>
            <h3>Add Keg</h3>
            <TextField id="filled-basic" label="Brewery" variant="filled" />
            <br/><br/>
            <TextField id="filled-basic" label="Name" variant="filled" />
            <br/><br/>
            <TextField id="filled-basic" label="ABV" variant="filled" />
            <br/><br/>
            <TextField id="filled-basic" label="Category" variant="filled" />
            <br/><br/>
            <TextField id="filled-basic" label="Price" variant="filled" />
            <Button className={classes.button} variant='contained' size='medium' color='#33c9dc' type='submit'>Enter</Button>
          </form>
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
    </div>
  );
}

export default AddKeg;