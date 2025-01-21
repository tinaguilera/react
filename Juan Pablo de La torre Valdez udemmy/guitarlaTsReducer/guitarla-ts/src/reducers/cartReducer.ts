import { guitars as db } from "../db"
import { CartItem, Guitar } from "../types"

export type CartActions = { type: 'addToCart', payload: { newGuitar: Guitar } } |
{ type: 'removeFromCart', payload: { id: Guitar['id'] } } |
{ type: 'increaseQuantity', payload: { id: Guitar['id'] } } |
{ type: 'decreaseQuantity', payload: { id: Guitar['id'] } } |
{ type: 'clearCart' }

export type CartState = {
    data: Guitar[]
    cart: CartItem[]
}
const initialStateCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

export const initialState: CartState = {
    data: db,
    cart: initialStateCart()
}



const MIN_ITEMS = 1
const MAX_ITEMS = 5

export const cartReducer = (
    state: CartState = initialState,
    action: CartActions
) => {

    if (action.type === 'addToCart') {
        const guitar = action.payload.newGuitar
        let updatedCart: CartItem[] = []
        const exist = state.cart.find((g) => g.id === guitar.id);
        console.log(exist);
        if (exist) {
            updatedCart = state.cart.map((g) => {
                if (g.id === guitar.id) {
                    if (g.quantity < MAX_ITEMS)
                        return { ...g, quantity: g.quantity + 1 }
                }
                return g;
            })

        } else {
            const newItem: CartItem = { ...guitar, quantity: 1 }
            updatedCart = [...state.cart, newItem];
        }
        return { ...state, cart: updatedCart }
    }
    if (action.type === 'removeFromCart') {
        const updatedCart = state.cart.filter( item => item.id !== action.payload.id)

        return { ...state, cart : updatedCart }
    }
    if (action.type === 'increaseQuantity') {
        const updatedCart = state.cart.map ( (g) => {
            if(g.id === action.payload.id && g.quantity < MAX_ITEMS)
                return {...g,quantity:g.quantity+1}
            return g;
        })

        return { ...state , cart : updatedCart}
    }
    if (action.type === 'decreaseQuantity') {
        const updatedCart = state.cart.map ( (g) => {
            if(g.id === action.payload.id && g.quantity > MIN_ITEMS)
                return {...g,quantity:g.quantity-1}
            return g;
        })
        return { ...state,cart:updatedCart }
    }
    if (action.type === 'clearCart') {
        return { ...state ,cart:[]}
    }
    return state



}