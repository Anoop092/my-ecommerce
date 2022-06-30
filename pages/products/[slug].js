import React from 'react'
import { Layout, ProductDetail } from '../../components'
import {useRouter} from 'next/router'
import { data } from '../../utils/products'
import Link from 'next/link'
const Detail = () => {
    const {query} = useRouter();
    const {slug} = query;
    const product = data.products.find((item)=>item.slug===slug);
    if(!product){
        return(
        <div className='text-center text-5xl text-red-700'>
            <p>Product Not Found </p>
          
        </div>
        )
    }
  return (
    <Layout title={product.name}>
        <div className='py-2'>
            <Link href='/'>Back to Home Page</Link>
        </div>
        <ProductDetail {...product} />


    </Layout>
  )
}

export default Detail