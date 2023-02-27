import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Navbar from '../Navbar/Navbar'
import './Landing.css'

const Landing = () => {
  return (
    <div className='landingContainer'>
      <Navbar />

      <ItemListContainer />

    </div>
  )
}

export default Landing