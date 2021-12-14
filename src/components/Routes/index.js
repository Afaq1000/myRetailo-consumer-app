import React from 'react';
// react router
import { BrowserRouter , Route, Routes } from 'react-router-dom';
// pages
// import Home from '../Home/HomePage';
import Error from './Error';
// import Navbar from '../Nav/NavBar';
// import About from '../about/About'
import Product from '../Product/Product';
import Order from '../Order/Order';
import {Login, Register} from '../login';
import { NavBar } from '../NavBar';
import { Home } from '../../pages/Home';
import { Slider } from '../Slider';
const ReactRouterSetup = () => {
  return (
   
    <BrowserRouter>
      {/* <Navbar /> */}
    
      
      <Routes>
 
          <Route exact path='/'
          element={ <Home />}
          />

          <Route  path='/login'
           element={ <Login />}
          />

          <Route  path='/register'
          element={ <Register />}
          />
          
          <Route  path='/product'
           element={ <Product />}
          />
           <Route  path='/order'
           element={ <Order/>}
          />
{/* {
          <Route  path='/about'
           element={ <About />}
          /> }
           */}
          { <Route path='*'
          element={ <Error />}
          /> }
      </Routes>
    </BrowserRouter>
      
  );
};

export default ReactRouterSetup;

