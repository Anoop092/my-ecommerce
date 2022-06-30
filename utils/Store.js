import React, { useContext, useReducer } from 'react';
import reducer from './reducer';
import {data} from './products'

export const Store = React.createContext();
const initialState = {
    cart:{
        cartItems:[]
    }

}

export const StoreProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    const addToCartHandler =(slug)=>{
        const product = data.products.find((item)=>item.slug===slug);
      
        const existingItem = state.cart.cartItems.find((item)=>item.name===product.name)
        let quantity= existingItem? existingItem.quantity + 1 : 1;
        if(product.countInStock<quantity){
            alert('out of stock');
            return;
        }

       dispatch({type:'Cart_ADD_ITEM',payload:{...product,quantity}})
    }
    const value = {state,dispatch,addToCartHandler};
    return(
    <Store.Provider value = {value}>
        {children}
      
    </Store.Provider>
    )
}
 export default function useGlobalContext(){
    return (useContext(Store));
 }