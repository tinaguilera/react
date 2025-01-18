
import { useReducer,useEffect, useMemo } from "react";
import Form from "./components/Form";
import { activityReducer,initialState } from "./reducers/activityReducer";
import ActivityList from "./components/ActivityList";
import CalorieTracker from "./components/CalorieTracker";

function App() {
  const [state,dispatch] = useReducer(activityReducer,initialState)
  useEffect(()=>{localStorage.setItem('activities',JSON.stringify(state.activities))},[state.activities])
  const useCanRestartApp = () => useMemo(() => state.activities.length !== 0, [state.activities]);
  return (
   <>
      <header className=" bg-lime-600 py-3 ">
        <div className="max-w-4xl mx-auto flex justify-between">
            <h1 className="text-center text-lg font-bold text-white uppercase"> Contador de calorias</h1>
            <button disabled={!useCanRestartApp()} className=" bg-gray-800 hover:bg-slate-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-10"  onClick={()=> dispatch({type:"restartApp"})} >Reiniciar app</button>
        </div>
      </header>
      <section className="bg-lime-500 py-20 px-5">
          <div className="max-w-4xl mx-auto">
              <Form
                dispatch = {dispatch}
                state = {state}
              />
          </div>
      </section>

      {useCanRestartApp()&&(      <section className=" bg-gray-200 py-10">
        <div className="max-w-4xl mx-auto">
            <CalorieTracker
              activities = {state.activities}
            />
        </div>
      </section>)}

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList
          activities = {state.activities}
          dispatch = {dispatch}
        />
      </section>
   </>
  );
}

export default App;
