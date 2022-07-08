import Cookies from 'js-cookie';
export default  function reducer(state,action){
    switch (action.type) {
        case 'Cart_ADD_ITEM':
            const newItem = action.payload;
            
            const existsItem=state.cart.cartItems.find((item)=>item.slug===newItem.slug);
             const cartItems = existsItem? state.cart.cartItems.map((item)=>item.name===existsItem.name?newItem:item):[...state.cart.cartItems,newItem];
             Cookies.set('cart',JSON.stringify({...state.cart.cartItems,cartItems,shippingAddress:{...state.cart.shippingAddress}}),{ expires: 7 });
            return({...state,cart:{...state.cart.cartItems,cartItems,}});
        case 'Cart_Delete_Item':{
            const cartItems = state.cart.cartItems.filter((item)=>item.slug!==action.payload.slug);
            // we cannot store objects in cookies so we must convert it to string
            Cookies.set('cart',JSON.stringify({...state.cart.cartItems,cartItems}))
            
            return ({...state,cart:{...state.cart, cartItems}})
    

        }
        case 'CART_RESET':{
            return{
                ...state,
                cart:{
                    cartItems:[],
                    shippingAddress:{location:{}},
                    paymentMethod: '',
                }
            }
        }
        case 'SAVE_SHIPPING_ADDRESS':{
            return{
                ...state,
                cart:{
                    ...state.cart,
                    shippingAddress:{
                        ...state.cart.shippingAddress,
                        ...action.payload
                    }
                }
            }
        }
        case 'SAVE_PAYMENT_METHOD':{
            return{
                ...state,
                cart:{
                    ...state.cart,
                    paymentMethod:action.payload
                }
            }
        }
        default:
            return state
    }
}