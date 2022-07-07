import Patient from "./Patient";


const PatientsList = ({patients, setPatient, deletePatient}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ?
        <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>

          {patients.map((patient) => 
            <Patient patient={patient} key={patient.id} setPatient={setPatient} deletePatient={deletePatient}/>
          )}
        </> :
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
              Agrega un paciente {''}
              <span className="text-indigo-600 font-bold">y aparecerán aquí</span>
          </p>
        </>

      }

    </div>
  )
};

export default PatientsList;
