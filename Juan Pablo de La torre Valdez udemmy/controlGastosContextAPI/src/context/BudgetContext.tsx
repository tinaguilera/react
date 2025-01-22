import { createContext, useReducer,Dispatch, ReactNode } from "react"
import { budgetReducer, initialState , BudgetAction,BudgetState} from "../Reducer/budgetReducer"

type BudgetContextProp = {
    state: BudgetState
    dispatch: Dispatch<BudgetAction>
}

type BudgetProviderProp = {
    children : ReactNode
}

export const BudgetContext = createContext<BudgetContextProp>({} as BudgetContextProp)

export const BudgetProvider  =  ({children} : BudgetProviderProp) => {

    const [state,dispatch] = useReducer(budgetReducer,initialState);

    return (
        <BudgetContext.Provider
            value={{state,dispatch}}
        >
            {children}
        </BudgetContext.Provider> 
    )
}