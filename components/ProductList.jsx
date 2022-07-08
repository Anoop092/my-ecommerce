import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({products}) => {
    
  return (
    products.map((product)=><ProductItem key={product.name} product={product} />)
    
  )
}

export default ProductList