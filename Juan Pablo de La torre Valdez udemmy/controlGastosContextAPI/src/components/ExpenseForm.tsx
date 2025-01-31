import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import type { Expense, DraftExpense } from "../type";
import { useState } from "react";
import ErrorMessage from "./ErrorMesage";
import { useBudget } from "../Hooks/useBudget";
const ExpenseForm = () => {
  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: "",
    category: "",
    date: new Date(),
  });
  const [error, setError] = useState("");

  const { dispatch } = useBudget();

  const handleChangeDate = (value: DraftExpense["date"]) => {
    setExpense({ ...expense, date: value });
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const isAmountField = ["amount"].includes(name);
    setExpense({
      ...expense,
      [name]: isAmountField ? +value : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(expense).includes("") || expense.amount <= 0) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("")
    dispatch({type:"addExpense",payload:{expense}})
  };
  return (
    <>
      <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <h2 className="text-center border-b-4 border-blue-500  font-black text-black text-2xl uppercase p-2  ">
          Nuevo gasto
        </h2>
        {error && <ErrorMessage> {error}</ErrorMessage>}
        <div className=" gap-y-2 grid grid-col-1 mt-3">
          <label
            htmlFor="expenseName"
            className="uppercase text-black font-semibold"
          >
            {" "}
            Nombre Gasto:
          </label>
          <input
            type="text"
            name="expenseName"
            id="expenseName"
            placeholder="Añade el nombre del gasto"
            className="bg-slate-200 p-1 border-slate-600 w-full"
            value={expense.expenseName}
            onChange={handleChange}
          />
        </div>
        <div className=" gap-y-2 grid grid-col-1 mt-3">
          <label
            htmlFor="amount"
            className="uppercase text-black font-semibold"
          >
            {" "}
            Cantidad:
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Añade la cantidad de dinero Ej: 3000"
            className="bg-slate-200 p-1 border-slate-600 w-full"
            value={expense.amount > 0 ? expense.amount : ""}
            onChange={handleChange}
          />
        </div>
        <div className=" gap-y-2 grid grid-col-1 mt-3">
          <label
            htmlFor="category"
            className="uppercase text-black font-semibold"
          >
            {" "}
            Categoria:
          </label>
          <select
            name="category"
            id="category"
            className="bg-slate-200 p-1 border-slate-600 w-full"
            value={expense.category}
            onChange={handleChange}
          >
            <option value=""> -- Seleccione -- </option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className=" gap-y-2 grid grid-col-1 mt-3">
          <label htmlFor="date" className="uppercase text-black font-semibold">
            {" "}
            Fecha Gasto:
          </label>
          <DatePicker
            value={expense.date}
            className="bg-slate-100 p-2 border-0"
            onChange={handleChangeDate}
            name="date"
          />
        </div>
        <input
          type="submit"
          value="Registrar gasto"
          className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg mt-4"
        />
      </form>
    </>
  );
};

export default ExpenseForm;
