import React from 'react';
import MedicineList from "../components/Medicine/MedicineList"
import { medicineData } from "../components/Medicine/medicinedata"
import Header from '../components/Header/Header.jsx'

const Medikamente = () =>{
  return (
    
      <div>
        <Header/>
        <h1>Deine Medikamente</h1>
        <MedicineList data={medicineData} />
      </div>
   
  );
}
export default Medikamente;