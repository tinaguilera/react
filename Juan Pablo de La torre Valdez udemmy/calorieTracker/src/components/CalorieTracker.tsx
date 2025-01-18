import { useMemo } from "react";
import { Activity } from "../Types";
import CalorieDisplay from "./CalorieDisplay";
import CalorieGraph from "./CalorieGraph";
type CalorieTrackerProps = {
  activities: Activity[];
};

export default function CalorieTracker({ activities }: CalorieTrackerProps) {
  const caloriasConsumidas = useMemo(
    () =>
      activities.reduce(
        (total, a) => (a.category === 1 ? total + a.calories : total),
        0
      ),
    [activities]
  );
  const caloriasQuemadas = useMemo(
    () =>
      activities.reduce(
        (total, a) => (a.category === 2 ? total + a.calories : total),
        0
      ),
    [activities]
  );

  const balance = caloriasConsumidas - caloriasQuemadas;

  return (
    <>
      <h2 className="text-4xl font-black text-slate-500 text-center">
        Resumen de Calorias
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CalorieDisplay
          calories={caloriasConsumidas}
          text={"Consumidas"}
        ></CalorieDisplay>
        <CalorieGraph
          caloriasConsumidas={caloriasConsumidas}
          caloriasQuemadas={caloriasQuemadas}
        />
        <CalorieDisplay
          calories={caloriasQuemadas}
          text={"Quemadas"}
        ></CalorieDisplay>
      </div>
    </>
  );
}
