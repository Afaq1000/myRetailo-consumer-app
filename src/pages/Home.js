import React from 'react'
// import { Categories } from '../components/Categories'
import { NavBar } from '../components/NavBar'
import { Products } from '../components/Products'
import { Slider } from '../components/Slider'

export const Home = () => {
    return (
        <>
      
        <div>
            <NavBar/>
        </div>
        <Slider/>
        {/* <Categories/> */}
        <Products/>
        </>
    )
}
 