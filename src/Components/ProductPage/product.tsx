import React from 'react';
import './product.css'
import { items } from "./../Types/types";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { add } from "./../Store/store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: '60px auto',
      maxWidth: 350,
      boxShadow: '15px 10px seagreen'
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    button: {

      '& > *': {
        margin: theme.spacing(1),

      }
    }
  }),
);


function Products() {
  const classes = useStyles();
  const products = useSelector((state: items[]) => {
    return state;
  })
  const dispatch = useDispatch();
  // console.log(products)
  return (
    <div className="App">
      {products.map((obj: items) => (
        <Paper key={obj.id} className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase onClick={() => dispatch(add(obj))} className={classes.image}>
                <img className={classes.img} alt="Shirts" src={obj.image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {obj.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {obj.desc}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID:{obj.id} <br />
                    <div className={classes.button}>
                      <IconButton onClick={() => dispatch(add(obj))} color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                      </IconButton>
                    </div>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">${obj.price}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}

export default Products;
