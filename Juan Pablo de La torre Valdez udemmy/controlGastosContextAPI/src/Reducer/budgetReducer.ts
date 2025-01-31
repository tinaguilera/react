import { v4 as uuidv4 } from "uuid";
import { DraftExpense, Expense } from "../type";

export type BudgetAction =
  | { type: "addBudget"; payload: { budget: number } }
  | { type: "showModal" }
  | { type: "hideModal" }
  | { type: "addExpense"; payload: { expense: DraftExpense } };

export type BudgetState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
};

export const initialState: BudgetState = {
  budget: 0,
  modal: false,
  expenses: [],
};

const createExpense = (e: DraftExpense): Expense => {
  return { ...e, id: uuidv4() };
};

export const budgetReducer = (
  state: BudgetState = initialState,
  action: BudgetAction
) => {
  if (action.type === "addBudget") {
    return { ...state, budget: action.payload.budget };
  }
  if (action.type === "showModal") {
    return { ...state, modal: true };
  }
  if (action.type === "hideModal") {
    return { ...state, modal: false };
  }
  if (action.type === "addExpense") {
    const exp = createExpense(action.payload.expense);

    return { ...state, expenses: [...state.expenses, exp] };
  }
  return state;
};
