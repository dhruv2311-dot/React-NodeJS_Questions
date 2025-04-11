import React from 'react'
import { useParams } from 'react-router-dom'
const ProductDetail = () => {
    const { id } = useParams()
  return (
    <div>
      <h3>Product Details</h3>
      <p>Product ID: <strong>{id}</strong></p>
    </div>
  )
}

export default ProductDetail
