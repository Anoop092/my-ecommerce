import Head from 'next/head'
import React, { useEffect,useState } from 'react'
import { ToastContainer } from 'react-toastify';
import Link from 'next/link'
import useGlobalContext from '../utils/Store'
import {useSession} from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children,title}) => {
    const {state,dispatch} = useGlobalContext();
    const [count,setCount] = useState(0);
    const {status,data:session} = useSession()
    
    const {cart} = state;
    useEffect(()=>{
    
    
         setCount(cart.cartItems.reduce((sum,cur)=>sum+cur.quantity,0));
},[cart.cartItems]);
    

    
    
  return (
    <>
    <Head>
        <title>{title?`${title}-Developers Shop`:'Developers Shop'}</title>
        <meta name='description' content='the shoping-zone for developers' />
        <link rel='icon' href='/favicon.ico' />
        <ToastContainer position='bottom-center' limit={1} />
    </Head>
    <div className='flex min-h-screen flex-col justify-between'>
        <header>
            <nav className='flex h-12 shadow-md py-5 px-3 bg-white items-center justify-between'>
                <Link href='/'>
                <a className='text-2xl  font-bold'>Developers Shop</a>
                </Link>
            <div>
                <Link href='/cart'>
                    <a className='text-xl p-2'>
                        Cart
                         {count>0 && (
                            <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
                                { 
                                  count
                                }
                                
                            </span>
                        )}
                       
                    </a>
                </Link>
                {
                    status === 'loading' ? ('Loading'): session?.user ?session.user.name:(
                    <Link href='/login'>
                        <a className='text-xl p-2'>Login</a>
                    </Link>
                    )

                }
                
                
            </div>
            </nav>

        </header>
        <main className='container m-auto mt-4 px-4'>
         {children}
        </main>
        <footer className='flex h-10 justify-center item-center shadow-md'>
            <p>Copyright &copy; Developers Shop</p>

        </footer>
    </div>
    </>
  )
}

export default Layout