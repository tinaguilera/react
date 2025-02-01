import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { createJSONStorage, devtools , persist} from "zustand/middleware";

import { DraftPatient, Patient } from "../types";
type PatientState = {
  patients: Patient[];
  activeId: Patient["id"];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientById: (id: Patient["id"]) => void;
  updatePatient:(data:DraftPatient)=>void;
};
const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuidv4() };
};

export const usePatientStore = create<PatientState>()(
  devtools(
    persist((set, get) => ({
    patients: [],
    activeId: "",
    addPatient: (data: DraftPatient) => {
      set((state) => ({
        patients: [...state.patients, createPatient(data)],
      }));
    },
    deletePatient: (id: Patient["id"]) => {
      set((state) => ({
        patients: state.patients.filter((p) => p.id !== id),
      }));
    
    },
    getPatientById: (id) => {
      set(() => ({
        activeId: id,
      }));
    },
    updatePatient:(data)=>{
        set((state)=>({
            patients:state.patients.map((p)=>{
                if(p.id===state.activeId)
                    return {id:p.id,...data}
                return p;
            }),
            activeId:""
        }))
    }
  }),{
    name:'patient-store',

  }))
);
