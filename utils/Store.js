import React, { useContext, useReducer } from 'react';
import Cookies from 'js-cookie';
import reducer from './reducer';
import {data} from './products';
import {useRouter} from 'next/router'


export const Store = React.createContext();
const initialState = {
    cart:Cookies.get('cart')?JSON.parse(Cookies.get('cart')):{
        cartItems:[],shippingAddress:{}
    }

}

export const StoreProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    const router = useRouter();
    const addToCartHandler =(slug)=>{
        const product = data.products.find((item)=>item.slug===slug);
      
        const existingItem = state.cart.cartItems.find((item)=>item.name===product.name)
        let quantity= existingItem? existingItem.quantity + 1 : 1;
        if(product.countInStock<quantity){
            alert('out of stock');
            return;
        }

       dispatch({type:'Cart_ADD_ITEM',payload:{...product,quantity}});
       router.push('/cart');
    }
    const removeCartHandler = (item)=>{
        dispatch({type:'Cart_Delete_Item',payload:item})
    }
    const updateCartHandler =(item,qty)=>{
        const quantity = Number(qty);
        dispatch({type:'Cart_ADD_ITEM',payload:{...item,quantity}});
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