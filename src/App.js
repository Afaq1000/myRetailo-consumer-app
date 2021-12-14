import React from 'react'
// import { Navbar } from './components/Navbar'
import Routes from './components/Routes/index'

import { Slider } from './components/Slider'
import {Home} from './pages/Home'
import {Categories} from './components/Categories'
import { Products } from './components/Products'

function App() {
  return (
    <>
    <div className='container'>
      <Routes/>

      {/* <Home/>
      <Slider/> */}
      {/* <Categories/>
      <Products/> */}
    </div>
    </>
  )
}

export default App

