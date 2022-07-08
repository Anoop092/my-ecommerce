import { decodeBase64 } from 'bcryptjs';
import Head from 'next/head'
import Image from 'next/image'
import { Layout,ProductList } from '../components';
import Product from '../models/Product';
import db from '../utils/db';
import {data} from '../utils/products';





export default function Home({products}) {
  return (
   <Layout title='Homepage'>
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
       <ProductList products= {products} />
    </div>
     
   </Layout>
  )
}

export async function getServerSideProps(){
  await db.connect();
  const products = await  Product.find() .lean();

  return{
    props:{
      products:products.map(db.convertDocsToObject),
    }
  }
}
