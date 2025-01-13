import { useState } from "react"
import type {MenuItems, OrderItems} from "../types/types"
export default function useOrder(){

    const [ order, setOrder] = useState<OrderItems[]>([])
    const [tip,setTip] = useState(0);

    const addItem = (item : MenuItems ) =>{
        const pos = order.findIndex((orderItem)=>orderItem.id === item.id);
        if(pos ===-1){
            const newOrderItem : OrderItems = {...item ,quantity:1 }
            setOrder([...order,newOrderItem]);
        }else{
            const updatedOrder : OrderItems[] = [...order];
            updatedOrder[pos].quantity++;
            setOrder(updatedOrder);


        }
   

    }

    const removeItem = (id : OrderItems["id"])=>{
        const updatedOrder = order.filter(i=>i.id!==id);
        setOrder(updatedOrder);
    }


    const increaseQuantity= (id : OrderItems["id"])=>{
        const updatedOrder = order.map((i)=>{
            if(i.id === id){
                return { ...i, quantity:i.quantity+1}
            }
            return i;
        })
        setOrder(updatedOrder);
    }




    const decreaseQuantity= (id : OrderItems["id"])=>{
        const updatedOrder = order.map((i)=>{
            if(i.id === id && i.quantity>1){
                return { ...i, quantity:i.quantity-1}
            }
            return i;
        })
        setOrder(updatedOrder);
    }

    const placeOrder  = ()=>{
        setOrder([])
        setTip(0)
    }

    return {
        addItem,order,removeItem, increaseQuantity,decreaseQuantity,tip,setTip,placeOrder
    }

}