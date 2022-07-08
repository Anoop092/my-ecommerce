import React from 'react'
import { Layout, ProductDetail } from '../../components'
import {useRouter} from 'next/router'
import { data } from '../../utils/products';
import db from '../../utils/db';
import Product from '../../models/Product'
import Link from 'next/link'

const Detail = ({product}) => {
    // const {query} = useRouter();
    // const {slug} = query;
    // const item = products.find((item)=>item.slug===slug);
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
        <ProductDetail product={product} />


    </Layout>
  )
}

export async function getServerSideProps(context){
    const {params} = context;
    const {slug} = params;

    await db.connect();
    const product = await Product.findOne({slug}).lean()
    await db.disconnect()
    return{
        props:{
            product:product?db.convertDocsToObject(product):null,
        }

    }
}

export default Detail