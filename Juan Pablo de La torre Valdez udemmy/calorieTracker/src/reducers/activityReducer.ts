
import { Activity } from "../Types";

export type ActivityActions =
  | {
      type: "saveActivity";
      payload: { newActivity: Activity };
    }
  | {
      type: "setActivityId";
      payload: { id:Activity['id'] };
    }
  |{
    type: "deleteActivity";
    payload: { id:Activity['id'] };
  }
  |{
    type: "restartApp";
    
  };
export type ActivityState = {
  activities: Activity[];
  activeId: Activity["id"];
};
const localStorageActivities = ():Activity[]=>{
  const l =localStorage.getItem('activities')
  return l?JSON.parse(l):[]
}
export const initialState: ActivityState = {
  activities: localStorageActivities(),
  activeId: "",
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if (action.type === "saveActivity") {
    let updatedActivities : Activity[] = []
    if(state.activeId){
      updatedActivities= state.activities.map(a =>a.id===state.activeId?action.payload.newActivity:a)
    }else{
      updatedActivities=[...state.activities,action.payload.newActivity]
    }
    return {
      ...state,
      activities: updatedActivities,
      activeId :  ''
      
    };
  }
  if(action.type==="setActivityId"){ 
    return {
      ...state,activeId:action.payload.id
    }
  }  if(action.type==="deleteActivity"){ 
    const updatedActivities = state.activities.filter(a => a.id!== action.payload.id)
    return {
      ...state,activities:updatedActivities
    }
  }
  if(action.type==="restartApp"){ 

    return {
      activities:[],
      activeId: "",
    }
  }
  return state;
};
