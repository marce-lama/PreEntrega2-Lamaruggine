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
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi numquam iure expedita nulla repellendus asperiores quos molestiae nam consequatur nemo ducimus assumenda sit dolore quaerat tenetur repudiandae non, voluptas dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit alias, beatae animi nobis non laudantium facere tenetur soluta saepe earum dolore, commodi a voluptates laborum quasi obcaecati libero! Nam, labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, omnis a vero quidem provident nostrum repellat reiciendis eaque magnam aspernatur culpa sit dolor suscipit asperiores, earum obcaecati corporis expedita libero!</p>
            <p className='detailPrecio'><strong>${product.precio}</strong></p>
        </div>
    </div>
  )
}

export default ItemDetail