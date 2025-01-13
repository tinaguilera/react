import MenuItem from "./components/MenuItem"
import OrderItem from "./components/OrderItem";
import OrderTotal from "./components/OrderTotal";
import TipsPForm from "./components/TipsPForm";
import { menuItems } from "./data/db"
import useOrder from "./Hooks/useOrder"

function App() {
  const {addItem,order,removeItem, increaseQuantity,decreaseQuantity,tip,setTip,placeOrder} = useOrder();



  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black ">Calculadora de Propinas y consumo</h1>  
      </header>    
     <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-x-6 h-full"> 
        <div >
          <h2 className="text-4xl font-black">Menu</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map((item)=>
            <MenuItem
              key = {item.id}
              item = {item}
              addItem = {addItem}
            />)}
          </div>
        </div>
        <div>
          <div className="border border-dashed border-slate-300 p-5  rounded-lg space-y-10">
              
          {order.length>0 ? (
                    <>
                      <OrderItem
                      order={order}
                      removeItem={removeItem}
                      increaseQuantity={increaseQuantity}
                      decreaseQuantity={decreaseQuantity}

                      />

                      <TipsPForm setTip = {setTip} tip={tip}/>
                      <OrderTotal order={order} tip={tip} placeOrder = {placeOrder}/>
                    </>
          ):( <p className="text-center">La orden esta vacia</p> )}

              
          </div>
        </div>
     </main>

      
    </>
  )
}

export default App
