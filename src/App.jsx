import { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PatientsList from './components/PatientsList';

function App() {
  
  const [patients, setPatients] = useState();
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const patientsInDB = JSON.parse(localStorage.getItem('patients')) ?? [];
    setPatients(patientsInDB);
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const deletePatient = patientId => {
    const updatedPatients = patients.filter(patient => patient.id !== patientId);
    setPatients(updatedPatients);
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Form patients={patients} setPatients={setPatients} patient={patient} setPatient={setPatient}/>
        <PatientsList patients={patients} setPatient={setPatient} patient={patient} deletePatient={deletePatient}/>
      </div>
    </div>
  )
}

export default App;
