import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type CalorieGraphProp = {
  caloriasConsumidas: number;
  caloriasQuemadas: number;
};
const CalorieGraph = ({
  caloriasConsumidas,
  caloriasQuemadas,
}: CalorieGraphProp) => {
  const data = {
    labels: ["Consumidas", "Quemadas"],
    datasets: [
      {
        data: [caloriasConsumidas, caloriasQuemadas],
        backgroundColor: ["rgba(132, 204, 22,1)", "rgba(249, 115, 22, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className=" relative h-[40vh] w-[80vw]" >
        <Doughnut
          data={data}
          options={{ maintainAspectRatio: false, aspectRatio: 1 }}
        />
      </div>
    </>
  );
};

export default CalorieGraph;
