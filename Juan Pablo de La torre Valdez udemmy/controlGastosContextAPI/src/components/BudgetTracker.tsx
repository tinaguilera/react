import AmountDisplay from "./AmountDisplay";

const BudgetTracker = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center ">
        <img src="/grafico.jpg" alt="Grafica de gasto" />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button
          className=" bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg "
          type="button"
        >
          Resetear App
        </button>
        <AmountDisplay label="presupuesto" amount={300} />
        <AmountDisplay label="Disponible" amount={200} />
        <AmountDisplay label="Gastado" amount={100} />
      </div>
    </div>
  );
};

export default BudgetTracker;
