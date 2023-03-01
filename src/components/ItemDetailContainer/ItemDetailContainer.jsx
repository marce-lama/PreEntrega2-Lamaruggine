import React, { useEffect, useState } from 'react'
import Products from '../../Products.json'
import { useParams } from 'react-router-dom'


const {id} = useParams();
const listaProductos = Products 

const ItemDetailContainer = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
          resolve(listaProductos);
        }, 3000);

    })
  
    return () => {
      second
    }
  }, [third])
  


  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer