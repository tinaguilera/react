import { usePatientStore } from "../store/store";
import { toast} from 'react-toastify';

import { Patient } from "../types";
import PatienDetailItem from "./PatienDetailItem";
type patientProp = {
  patient: Patient;
};
export default function PatientDetails({ patient }: patientProp) {
  const date = new Date(`${patient.date}T00:00:00`); // Convertir string a Date

  const formattedDate = date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const {deletePatient,getPatientById}=usePatientStore()
const handleClick = (id:Patient['id'])=>{
  deletePatient(id);
  toast.success("Paciente eliminado correctamente!")
}

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatienDetailItem label="ID: " data={patient.id} />
      <PatienDetailItem label="Nombre: " data={patient.name} />
      <PatienDetailItem label="Propietario: " data={patient.caretaker} />
      <PatienDetailItem label="Email: " data={patient.email} />
      <PatienDetailItem label="Fecha de Alta: " data={formattedDate} />
      <PatienDetailItem label="Sintomas: " data={patient.symptoms} />

      <div className="flex flex-col lg:flex-row  justify-between gap-3 mt-10">
        <button type="button" onClick={()=>getPatientById(patient.id)} className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg">editar </button>
        <button onClick={()=>{handleClick(patient.id)}} type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg">eliminar </button>

      </div>
    </div>
  );
}
