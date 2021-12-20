import React from 'react'
import Footer from '../components/Footer'
// import { Categories } from '../components/Categories'
import { NavBar } from '../components/NavBar'
import NewsLetter from '../components/NewsLetter'
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
        <NewsLetter/>
        <Footer/>
        </>
    )
}
 