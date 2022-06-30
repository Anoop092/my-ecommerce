import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components'


export default function Home() {
  return (
   <Layout title='Homepage'>
   <h1 className='text-3xl'>Home</h1>
   </Layout>
  )
}
