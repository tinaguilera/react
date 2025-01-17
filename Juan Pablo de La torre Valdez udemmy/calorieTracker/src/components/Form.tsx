import { useState,useEffect } from "react";
import {v4 as uuidv4} from 'uuid'
import { categories } from "../data/categories";
import { Activity } from "../Types";
import { ActivityActions } from "../reducers/activityReducer";
import { ActivityState } from "../reducers/activityReducer";
type FormProp = {
  dispatch : React.Dispatch<ActivityActions>
  state : ActivityState
}
export default function Form({dispatch,state} : FormProp) {

  const emptyActivity : Activity = {
    id : uuidv4(),
    category: 1,
    name: "",
    calories: 0,
  }
 
  const [activity, setActivity] = useState<Activity>(emptyActivity);
  useEffect(()=> {
    if(state.activeId){
      const selectedAc = state.activities.filter(ac => state.activeId === ac.id)[0]
      setActivity(selectedAc)
    }
  },[state.activeId])

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{
    const isNumberField :boolean = ['category','calories'].includes(e.target.id)

    setActivity({...activity,
      [e.target.id] : isNumberField ? + e.target.value : e.target.value
    })
    
  }

  const isValidActivity = ()=>{

      const  {name,calories} = activity;
      return name.trim()!='' && calories > 0

  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    dispatch({type: "saveActivity",payload:{
      newActivity:activity
    }})

    setActivity({ ...emptyActivity ,id : uuidv4()})

  } 

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className=" font-bold">
          Categoria:
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className=" font-bold">
          Actividad:
        </label>

        <input
          type="text"
          id="name"
          className="border border-slate-300  p-2 rounded-lg"
          value={activity.name}
          onChange={handleChange}

          placeholder="Ej. comida, Jugo de Naranaja,Ensalada,Ejercicio,pesas"
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className=" font-bold">
          Calorias:
        </label>
        <input
          type="number"
          id="calories"
          className="border border-slate-300 p-2 rounded-lg"
          value={activity.calories}
          onChange={handleChange}

          placeholder="Ej. 300 o 500"
        />
      </div>
      <input
        type="submit"
        className="  bg-gray-800 hover:bg-gray-900 w-full p-2 uppercase text-white cursor-pointer disabled:opacity-10"
        value={"Guardar "+ categories.find((c)=>c.id===activity.category)?.name}
        disabled={!isValidActivity()}
      />
    </form>
  );
}
