type CalorieDisplayProp = {
    calories : number,
    text : string
}

export default function CalorieDisplay({calories,text}:CalorieDisplayProp) {
  return (
    <p className="text-slate-500 font-bold rounded-full grid gird-cols-1 gap-3 text-center uppercase">
          <span
            className={`font-black text-6xl  uppercase
           ${text==='Consumidas'?"text-lime-500":"text-orange-500"}`}
          >
            {calories}
          </span>{" "}
          {text}
        </p>
  )
}
