import Image from 'next/image'
import React from 'react'

const ProductDetail = ({name,image,category,brand,rating,numReviews,description,countInStock,price}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 md: gap-3'>
        <div className='md:col-span-2'>
            <Image
            src={image}
            alt={name}
            width={630}
            height={630}
            layout = 'responsive'

             ></Image>

        </div>
        <div>
            <ul>
                <li>
                    <h1 className='text-lg'>{name}</h1>
                </li>
                <li>
                    Category:{category}
                </li>
                <li>
                    Brand:{brand}
                </li>
                <li>
                    {rating} of {numReviews} reviews
                </li>
                <li>
                    {description}
                </li>
            </ul>
        </div>
        <div>
            <div className='card p-5'>
                <div className='flex justify-between mb-2'>
                    <div>Price:</div>
                    <div>${price}</div>

                </div>
                <div className='flex justify-between mb-2 '>
                    <div>Status</div>
                    <div>{countInStock>0?'In Stock':'Unavailable'}</div>

                </div>

            </div>
        </div>


    </div>
  )
}

export default ProductDetail