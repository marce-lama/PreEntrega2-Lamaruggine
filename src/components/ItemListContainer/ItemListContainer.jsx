import React from 'react'
import './ItemListContainer.css'
import Products from '../../Products.json'
import { Link } from 'react-router-dom'

const ItemListContainer = () => {

  const productos = Products

  return (
    <div className="container text-center productContainer">
      <div className="row row-cols-4 cols justify-content-center">
        {
          productos.map(produ => (
          <>
          <div className='product'>
            <div className="col" key={produ.id}>
              <img className='imagenProdu' src={produ.imagen} alt={produ.marca}/>
              <h5 className='tituloProdu' >{produ.marca}</h5>
              <p className='paisOrigen'>{produ.pais}</p>
              <p className='precioProdu'><strong>${produ.precio}</strong></p>
              <button className='btnAgregar'>+</button>
              <button className='btnEliminar'>-</button>
            </div> 
            <div>
              <Link to={`/detail/${produ.id}`}><button type="button" className="btn btn-secondary">Mas Informacion</button></Link>
            </div>
          </div>
          </>
          ))
        }
      </div>  
    </div>
  )
}

export default ItemListContainer