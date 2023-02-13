import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Navbar from '../Navbar/Navbar'
import './Landing.css'

const Landing = () => {
  return (
    <div className='landingContainer'>
      <Navbar />

      <ItemListContainer greeting = "Página dedicada a la Venta, Comercialización e Importación de cervezas del mundo." /> 

    </div>
  )
}

export default Landing