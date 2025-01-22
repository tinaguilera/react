import { formatCurrency } from "../helpers";

type AmountDisplayProp = {
    label : string
    amount : number
}

const AmountDisplay = ({label,amount}:AmountDisplayProp) => {
    return ( 
       <p className="text-2xl text-blue-600 font-bold">
            {label}: {" "}
            <span className="font-black text-black">{formatCurrency(amount)}</span>
       </p>


     );
}
 
export default AmountDisplay;