import React, { useContext, useReducer } from 'react';
import Cookies from 'js-cookie';
import reducer from './reducer';

import {useRouter} from 'next/router'
import axios from 'axios';
import { toast } from 'react-toastify';


export const Store = React.createContext();
const initialState = {
    cart:Cookies.get('cart')?JSON.parse(Cookies.get('cart')):{
        cartItems:[],shippingAddress:{},paymentMethod:'',
    }

}

export const StoreProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    const router = useRouter();
    const addToCartHandler = async(slug,_id,product)=>{
        // const product = data.products.find((item)=>item.slug===slug);
        
      
        const existingItem = state.cart.cartItems.find((item)=>item.name===product.name);
        const {data} = await axios.get(`/api/products/${_id}`);
        let quantity= existingItem? existingItem.quantity + 1 : 1;
        if(data.countInStock<quantity){
            
            return toast.error('Sorry.Product is out of stock');
        }

       dispatch({type:'Cart_ADD_ITEM',payload:{...product,quantity}});
       router.push('/cart');
       toast.success('Product added to cart');
    }
    const removeCartHandler = (item)=>{
        dispatch({type:'Cart_Delete_Item',payload:item})
    }
    const updateCartHandler = async (item,qty)=>{
        const quantity = Number(qty);
        
        const {data} = await axios.get(`/api/products/${item._id}`);
        console.log(data);
        if(data.countInStock<quantity){
            return toast.error('Sorry.Product is out of stock');
        }
        dispatch({type:'Cart_ADD_ITEM',payload:{...item,quantity}});
        toast.success('Updated the cart');
    }
    const value = {state,dispatch,addToCartHandler,removeCartHandler,updateCartHandler};
    return(
    <Store.Provider value = {value}>
        {children}
      
    </Store.Provider>
    )
}
 export default function useGlobalContext(){
    return (useContext(Store));
 }