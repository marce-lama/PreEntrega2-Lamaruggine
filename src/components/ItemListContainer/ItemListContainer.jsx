import React from 'react'
import './ItemListContainer.css'
import Products from '../../Products.json'

//const productos = Products

const ItemListContainer = () => {

  const productos = Products

  return (
    <div className="container text-center productContainer">
      <div className="row row-cols-3 cols justify-content-center">
        {
          productos.map(produ => (
            <div className="col product">
              <img src="" alt="">{produ.imagen}</img>
              <h3 className='tituloProdu' >{produ.marca}</h3>
              <p className='precioProdu'>{produ.precio}</p>
            </div> 
            
          ))
        }
      </div>  
    </div>
    //<div className='textGreeting'>{props.greeting}</div>
  )
}

export default ItemListContainer