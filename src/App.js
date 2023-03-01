import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default App