import Link from 'next/link'
import React from 'react'


const ProductItem = ({slug,image,name,price,brand}) => {
  return (
    <div className='card'>
        <Link href={`/products/${slug}`}>
            <a>
                <img 
                src={image} 
                alt={name}
                className='rounded shadow'
                />
            </a>
            
        </Link>
        <div className='flex flex-col items-center justify-center p-5'>
            <Link href={`/products/${slug}`}>
                <a>
                    <h2 className='text-lg'>
                        {name}
                    </h2>
                </a>
            </Link>
            <p className='mb-2'>{brand}</p>
            <p className='mb-2'>{price}</p>
            <button className='w-full rounded-lg bg-orange-500 py-2 text-white text-lg shadow outline-none hover:bg-orange-300 ' type='btn'>
                Add to Cart
            </button>

            
                
        </div>

    </div>
  )
}

export default ProductItem