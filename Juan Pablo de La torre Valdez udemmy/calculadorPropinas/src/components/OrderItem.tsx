import { formatCurrency } from "../helpers";
import { OrderItems } from "../types/types";
type OrderItemProps ={
   order : OrderItems[],
   removeItem: (id: OrderItems["id"]) => void,
   increaseQuantity: (id: OrderItems["id"]) => void,
   decreaseQuantity: (id: OrderItems["id"]) => void

   
}


const OrderItem = ({order,removeItem,increaseQuantity,decreaseQuantity}: OrderItemProps) => {
    return (  
        <div>
                      <h2 className="text-4xl font-black">Consumo</h2>

            <div className="space-y-3 mt-10">
                {
                    
                        order.map((item)=>
                            <div key = {item.id} className="flex justify-between border-t border-gray-500 item-center py-5 last-of-type:border-b border-gray-500 ">
                                <div>
                                    <p className="text-lg">{item.name} - {formatCurrency( item.price)}</p>
                                    <p className="font-black">Cantidad: {item.quantity} - {formatCurrency(item.quantity*item.price)}</p>
                                </div>
                                <div className="flex space-x-1">
                                <button onClick={()=>decreaseQuantity(item.id)} className="bg-white h-8 w-8 rounded-full text-center font-black text-xl text-red-700 border border-red-700" >-</button>
                                <button onClick={()=>increaseQuantity(item.id)} className="bg-white h-8 w-8 rounded-full text-center font-black text-xl text-red-700 border border-red-700" >+</button>
                                <button onClick={()=>removeItem(item.id)} className="bg-red-600 h-8 w-8 rounded-full text-center font-black text-white" >x</button>

                                </div>

                            </div>)
                        
                    
                }

            </div>
        </div>
    );
}
 
export default OrderItem;