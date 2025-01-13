import { useMemo } from "react"
import type {OrderItems} from "../types/types"
import { formatCurrency } from "../helpers"

type OrderTotalProp = {
    order : OrderItems[]
    tip:number
     placeOrder: () => void
}



const OrderTotal = ({order,tip,placeOrder}:OrderTotalProp) => {

    const subTotal = useMemo(()=>{
        return order.reduce((total,item)=> total+item.price*item.quantity,0)
    },[order])

    const tipTotal = useMemo(()=>subTotal*tip,[tip,order])
    const total = subTotal + tipTotal

    return (  
        <>
            <div className="space-y-3">
                <h2 className="font-blcak text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar:{' '} 
                    <span className="font-bold"> {formatCurrency(subTotal)}</span>
                </p>

                <p>Propina:{' '} 
                    <span className="font-bold">{formatCurrency(tipTotal)}</span>
                </p> 
                
                <p>Total a pagar:{' '} 
                    <span className="font-bold">{formatCurrency(total)}</span>
                </p>
            </div>
            <button className="w-full bg-black p-3 uppercase text-white mt-10 disabled:opacity-30" disabled = {total === 0} onClick={()=>placeOrder()}>
                Guardar Orden
            </button>
        </>


    );
}
 
export default OrderTotal;