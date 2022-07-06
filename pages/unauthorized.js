import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '../components'

const Unauthorized = () => {
    const router = useRouter();
    const {message} = router.query;
  return (
    <Layout title='unauthorized'>
        <h1 className='text-xl text-center'>Access Denied</h1>
        {message && <div className='mb-4 text-red-500 text-center'>{message}</div>}


    </Layout>
  )
}

export default Unauthorized