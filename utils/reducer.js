export default  function reducer(state,action){
    switch (action.type) {
        case 'Cart_ADD_ITEM':
            const newItem = action.payload;
            const existsItem=state.cart.cartItems.find((item)=>item.slug===newItem.slug);
             const cartItems = existsItem? state.cart.cartItems.map((item)=>item.name===existsItem.name?newItem:item):[...state.cart.cartItems,newItem];
            return({...state,cart:{...state.cart.cartItems,cartItems}})
        case 'Cart_Delete_Item':{
            const cartItems = state.cart.cartItems.filter((item)=>item.slug!==action.payload.slug);
            return ({...state,cart:{...state.cart, cartItems}})
    

        }
        default:
            return state
    }
}