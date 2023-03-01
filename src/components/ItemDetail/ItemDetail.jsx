import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div>
      <img className='imagenProdu' src={product.imagen} alt={product.marca}/>
      <h5 className='tituloProdu' >{product.marca}</h5>
      <p className='paisOrigen'>{product.pais}</p>
      <p className='precioProdu'><strong>${product.precio}</strong></p>
    </div>
  )
}

export default ItemDetail