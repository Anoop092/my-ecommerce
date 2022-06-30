import React from 'react';
import Link from 'next/link'
import Layout from '../../components/Layout';
import useGlobalContext from '../../utils/Store'
import { CartList } from '../../components';
import dynamic from 'next/dynamic'

const CartScreen = () => {
    const {state,dispatch} = useGlobalContext();
    const {
        cart:{cartItems}
    } = state;
  return (
    <Layout title="Shopping Cart" >
        <h1 className='mb-4 text-xl'>Shopping Cart</h1>
        {
            cartItems.length===0 ? (
            <div>Cart is Empty 
                <Link href='/'>Go Shopping</Link>
            </div>
            ):(<CartList cartItems={cartItems} />)

        }
        
    </Layout>
  )
}

export default dynamic (()=>Promise.resolve(CartScreen),{ssr:false})