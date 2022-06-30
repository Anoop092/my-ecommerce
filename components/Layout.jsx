import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

const Layout = ({children,title}) => {
  return (
    <>
    <Head>
        <title>{title?`${title}-Developers Shop`:'Developers Shop'}</title>
        <meta name='description' content='the shoping-zone for developers' />
        <link rel='icon' href='/favicon.ico' />
    </Head>
    <div className='flex min-h-screen flex-col justify-between'>
        <header>
            <nav className='flex h-12 shadow-md py-5 px-3 bg-white items-center justify-between'>
                <Link href='/'>
                <a className='text-2xl  font-bold'>Developers Shop</a>
                </Link>
            <div>
                <Link href='/cart'><a className='text-xl p-2'>Cart</a></Link>
                <Link href='/login'><a className='text-xl p-2'>Login</a></Link>
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