import {useState, useEffect} from 'react';
import { Error } from './Error';

const Form = ({patients, setPatients, patient, setPatient}) => {

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [admission, setAdmission] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(patient).length){
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setAdmission(patient.admission);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);

    return random + date;
  }

  const resetValues = () => {
    setName('');
    setOwner('');
    setEmail('');
    setAdmission('');
    setSymptoms('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if([name, owner, email, admission, symptoms].includes('')){
      setError(true);
    } else {
      setError(false)
    }

    const patientData = {
      name,
      owner,
      email,
      admission,
      symptoms,
    }

    if(patient.id){
      patientData.id = patient.id;
      const updatedPatients = patients.map( patientState => patientState.id === patient.id ? patientData : patientState);
      setPatients(updatedPatients);
      setPatient({});
    } else {
      patientData.id = generateId();
      setPatients([...patients, patientData]);
    }


    resetValues();
  }

  return (
      <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añadir pacientes y {""}
          <span className="text-indigo-600 font-bold">administrarlos</span>
        </p>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">

          {error && <Error>Todos los campos son obligatorios</Error>}

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="name">Nombre mascota</label>
            <input id="name" type="text" placeholder="nombre de mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="owner">Nombre propietario</label>
            <input id="owner" type="text" placeholder="nombre de propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={owner} onChange={(e) => setOwner(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email de contacto</label>
            <input id="email" type="email" placeholder="email de contacto" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="admission">Alta</label>
            <input id="admission" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={admission} onChange={(e) => setAdmission(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="symptoms">Síntomas</label>
            <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="symptoms" placeholder="Describe los síntomas" value={symptoms} onChange={(e) => setSymptoms(e.target.value)}/>
          </div>

          <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={patient.id ? 'Guardar cambios' : 'Agregar paciente'} />
        </form>
      </div>
  );
};
export default Form;

