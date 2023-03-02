import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({product}) => {
  return (
    <div className='contenedorPrincipal'>
        <div>
            <img className='detailImagen' src={product.imagen} alt={product.marca}/>
        </div>
        <div className='contenedorInfo'>
            <h5 className='detailTitulo' >{product.marca}</h5>
            <p className='detailPais'>{product.pais}</p>
            <p className='detailPrecio'><strong>${product.precio}</strong></p>
        </div>
    </div>
  )
}

export default ItemDetail