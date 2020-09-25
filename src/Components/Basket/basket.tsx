import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { items } from '../Types/types';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { remove } from './../Store/store';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      height : '25px',
      backgroundColor : 'darkblue'
    },
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      // alignItems: 'centre',
      margin: '60px auto',
      maxWidth: 350,
    },
    inline: {
      display: 'inline',
    },
  }),
);


function Basket() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const products = useSelector((state: items[]) => {
    return state;
  })
  // console.log(products.filter(product => product.addedstatus).map( (item: items) => (item)));
  // The basket will display those products which have statusadded true
  return (
    <div >
      {products.filter(product => product.addedstatus).map((item) => (
        <List key={item.id} className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={item.image} />
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    ${item.price}
                  </Typography>
                  <br />
                  {item.desc}
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => dispatch(remove({ id: item.id }))}
                  >
                    Remove
                  </Button>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      ))}
    </div>
  )
}

export default Basket;
