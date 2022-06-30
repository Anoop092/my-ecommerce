import Head from 'next/head'
import Image from 'next/image'
import { Layout,ProductList } from '../components';
import {data} from '../utils/products';





export default function Home() {
  return (
   <Layout title='Homepage'>
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
       <ProductList products= {data.products} />
    </div>
     
   </Layout>
  )
}
