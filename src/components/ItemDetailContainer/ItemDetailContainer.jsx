import React, { useEffect, useState } from 'react'
import Products from '../../Products.json'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const productFound = Products.find((product) => product.id === parseInt(id))
    setProduct(productFound)
    }, [id])

    return (
      <div>
      <h2>Detalles del producto:</h2>
      <ItemDetail product={product} />
    </div>
    ) 
}
export default ItemDetailContainer