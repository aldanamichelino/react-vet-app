const Patient = ({patient, setPatient, deletePatient}) => {

  const handleDelete = () => {
    const answer = confirm('¿Deseas eleminar este paciente?');

    if(answer){
      deletePatient(patient.id);
    }
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-799 uppercase">Nombre: {''}
          <span className="font-normal normal-case">{patient.name}</span>
        </p>

        <p className="font-bold mb-3 text-gray-799 uppercase">Propietario: {''}
          <span className="font-normal normal-case">{patient.owner}</span>
        </p>

        <p className="font-bold mb-3 text-gray-799 uppercase">Email: {''}
          <span className="font-normal normal-case">{patient.email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-799 uppercase">Fecha alta: {''}
          <span className="font-normal normal-case">{patient.admission}</span>
        </p>

        <p className="font-bold mb-3 text-gray-799 uppercase">Sintomas: {''}
          <span className="font-normal normal-case">{patient.symptoms}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" onClick={() => setPatient(patient)}>Editar</button>
          <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" onClick={handleDelete}>Eliminar</button>
        </div>
      </div>
  )
}

export default Patient;
