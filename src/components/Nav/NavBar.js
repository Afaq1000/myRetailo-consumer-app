import './style.css'
import React from 'react';
import { Link } from 'react-router-dom';
{/* <link rel="stylesheet" type="text/css" href="style.css" /> */}

const NavBar = () => {
  return (
    <nav className="navigation">
      <ul className="container" >
               <h1>Welcome to Retailo</h1>
               <h5>Consumer App</h5>
        <li >
          <Link to='/'>Home</Link>
        </li>
        <li>
          
          <Link to='/product'>Product</Link>
        </li>
        <li>
          
          <Link to='/order'>Order</Link>
        </li>
        <li>
         
          <Link to='/register'>Register</Link>
        </li>
        <li>
          
          <Link to='/login'>Login</Link>
        </li>
        <li>
         
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
