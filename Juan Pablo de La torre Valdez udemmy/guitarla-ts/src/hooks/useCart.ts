import { useState, useEffect ,useMemo} from "react";
import {guitars} from "../db.ts"
import type { Guitar,CartItem } from "../types";

function useCart(){


      const [data] = useState(guitars)

      const initialStateCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
      }

      const [cart, setCart] = useState(initialStateCart)

      function saveLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart))
      }
      
    
      // Este useEffect se ejecuta cuando 'cart' cambia
      useEffect(() => {
        saveLocalStorage(); // Solo se ejecuta cuando 'cart' cambia
    
    
      }, [cart])// La dependencia 'cart' asegura que solo se ejecute cuando 'cart' cambie
    
    
      function addToCart(newGuitar : Guitar ) {
    
        const exist = cart.findIndex((g) => g.id === newGuitar.id);
        if (exist === -1) {
          const newItem : CartItem = {...newGuitar,quantity : 1}
          setCart([...cart, newItem]);
    
    
        } else {
          const updatedCart = [...cart];
          updatedCart[exist].quantity++;
          setCart(updatedCart)
    
    
        }
    
      }
    
      function removeFromCart(id : Guitar['id']) {
    
        setCart(prevCart => prevCart.filter(item => item.id != id));
      }
    
      function increaseQuantity(id : Guitar['id']) {
        const updatedCart = cart.map(item => {
          if (item.id === id) {
            return {
              ...item, quantity: item.quantity + 1
            }
          }
          return item
        })
        setCart(updatedCart)
      }
    
      function decreaseQuantity(id : Guitar['id']) {
        const exist = cart.findIndex((g) => g.id === id);
        const updatedCart = [...cart];
        if (updatedCart[exist].quantity > 1)
          updatedCart[exist].quantity--;
        setCart(updatedCart)
      }
    
      function clearCart() {
        setCart([]);
      }
    
    

       //state derivado
  const isEmpty = useMemo(() => cart.length===0,[cart])

  const total = useMemo(() => cart.reduce((total,item)=>{
    total=total +item.quantity*item.price
  return total},0),[cart])
  
 

    return {data,
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        addToCart,
        isEmpty,
        total
    }
}

export default useCart