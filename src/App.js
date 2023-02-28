import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <ItemListContainer />
    </div>
  )
}

export default App