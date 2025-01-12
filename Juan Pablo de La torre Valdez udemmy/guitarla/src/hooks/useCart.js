import { useState, useEffect ,useMemo} from "react";

function useCart(){


      const [guitars, setGuitars] = useState([])
      const initialStateCart = () => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
      }
      const [cart, setCart] = useState(initialStateCart)

      const getGuitars = async () => {
        try {
          const res = await fetch("http://localhost:3000/data");
          if (!res.ok)
            throw new Error("Error fetching guitars")
          const data = await res.json();
          setGuitars(data);
    
    
        } catch (error) {
          console.log(error.message)
        }
    
      }
    
      useEffect(() => {
        getGuitars(); // Esto solo se ejecutará una vez al montar el componente
      }, []); // El array vacío [] asegura que este efecto solo se ejecute una vez
    
      // Este useEffect se ejecuta cuando 'cart' cambia
      useEffect(() => {
        saveLocalStorage(); // Solo se ejecuta cuando 'cart' cambia
    
    
      }, [cart])// La dependencia 'cart' asegura que solo se ejecute cuando 'cart' cambie
    
    
      function addToCart(newGuitar) {
    
        const exist = cart.findIndex((g) => g.id === newGuitar.id);
        if (exist === -1) {
          newGuitar.quantity = 1;
          setCart([...cart, newGuitar]);
    
    
        } else {
          const updatedCart = [...cart];
          updatedCart[exist].quantity++;
          setCart(updatedCart)
    
    
        }
    
      }
    
      function removeFromCart(id) {
    
        setCart(prevCart => prevCart.filter(item => item.id != id));
      }
    
      function increaseQuantity(id) {
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
    
      function decreaseQuantity(id) {
        const exist = cart.findIndex((g) => g.id === id);
        const updatedCart = [...cart];
        if (updatedCart[exist].quantity > 1)
          updatedCart[exist].quantity--;
        setCart(updatedCart)
      }
    
      function clearCart() {
        setCart([]);
      }
    
      function saveLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart))
      }

       //state derivado
  const isEmpty = useMemo(() => cart.length===0,[cart])

  const total = useMemo(() => cart.reduce((total,item)=>{
    total=total +item.quantity*item.price
  return total},0,[cart])
  )


    return {guitars,
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