import Link from 'next/link'
import React from 'react'
import { Layout } from '../../components'
import { useForm } from 'react-hook-form'

const LoginPage = () => {
    const {handleSubmit,register,formState:{errors}} = useForm();
    const submitHandler =({email,password})=>{
        console.log(email,password)

    }
  return (
    <Layout title='login page' >
        <form className='mx-auto max-w-screen-md'onSubmit={handleSubmit(submitHandler)}>
            <h1 className='mb-4 text-xl'>Login</h1>
            <div className='mb-4'>
                <label htmlFor='email'>Email</label>
                <input type='email' {...register('email',{required:'Please enter email ',
            pattern:{
                value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message:'please enter valid email address'
            }})} className='w-full' id='email' autoFocus />
                {errors.email && (<div className='text-red-500'>{errors.email.message}</div>)}

            </div>
            <div className='mb-4'>
                <label htmlFor='password'>Password</label>
                <input type='password' 
                {...register('password',{required:'Please enter password ',minLength:{value:6,message:'password must be more than 5 char'}})}
                className='w-full' id='password' autoFocus />
                {errors.password && (<div className='text-red-500'>{errors.password.message}</div>)}

            </div>
            <div className='mb-4'>
                <button className='primary-button'>Login</button>

            </div>
            <div className='mb-4'>
                Don&apos;t have an account? &nbsp;
                <Link href='/register'>Register</Link>

            </div>

        </form>

    </Layout>
  )
}

export default LoginPage