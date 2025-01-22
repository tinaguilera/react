import { useMemo, useState } from "react";
import { useBudget } from "../Hooks/useBudget";
const BudgetsForm = () => {
  const [budget, setBudget] = useState<number>(0);
  const {dispatch} = useBudget()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.value !== "" ? e.target.valueAsNumber : NaN);
  };
  const isValid = useMemo(() => {
    return !isNaN(budget) && budget > 0;
  }, [budget]);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    dispatch({type:"addBudget",payload:{budget:budget}})
    
  }
  return (
    <form className="space-y-5" onSubmit={handleSubmit} >
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-4xl text-blue-600 font-bold text-center"
        >
          Definir Presupuesto
        </label>
        <input
          id="budget"
          type="number"
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Define tu presupuesto"
          name="budget"
          value={isNaN(budget) ? "" : budget}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        value="Definir Presupuesto"
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white uppercase font-black border rounded-lg disabled:bg-opacity-10 "
        disabled={!isValid}
      />
    </form>
  );
};

export default BudgetsForm;
