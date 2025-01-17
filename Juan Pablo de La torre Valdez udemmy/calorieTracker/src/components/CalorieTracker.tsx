import { useMemo } from "react";
import { Activity } from "../Types";
import CalorieDisplay from "./CalorieDisplay";
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

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de Calorias
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
       <CalorieDisplay
        calories={caloriasConsumidas}
        text={"Consumidas"}
       ></CalorieDisplay>
        <CalorieDisplay
        calories={caloriasQuemadas}
        text={"Quemadas"}
       ></CalorieDisplay>
      </div>
    </>
  );
}
