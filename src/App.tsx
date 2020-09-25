import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Routes, } from "react-router-dom";
import Home from "./Components/Home/home";
import Products from "./Components/ProductPage/product";
import Basket from './Components/Basket/basket';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      // backgroundColor: "#cccccc" 
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Online Shop
          </Typography>
              <Link to='/'>
                <button className = "button" >Home</button>
              </Link>
              <Link to='/products'>
                <button className = "button" >Product</button>
              </Link>
              <Link to='/basket'>
                <button className = "button" >Basket</button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
