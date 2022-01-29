import Header from "../components/Header/Header.jsx";
import Search from "../components/Symptoms/Search/Search";
import styled from "styled-components";
import { useState, useEffect } from "react";
import SymptomsList from "../components/Symptoms/SymptomsList";
import { journaldata } from "../components/Symptoms/journaldata";
import NewSymptom from "../components/Symptoms/NewSymptom";

import { loadFromLocal, saveToLocal } from "../lib/localStorage";

const Symptome = () => {
  const [symptoms, setSymptoms] = useState(journaldata);

  useEffect(() => {
    const storageData = loadFromLocal("_symptoms");
    if (storageData && storageData.length > 0) {
      setSymptoms(storageData);
    }
  }, []);

  useEffect(() => {
    saveToLocal("_symptoms", symptoms);
  }, [symptoms]);

  function addSymptom(symptom) {
    setSymptoms([symptom, ...symptoms]);
  }

  const removeItem = (symptomName) => {
    const remainingSymptoms = symptoms.filter(
      (symptom) => symptom.name !== symptomName
    );
    setSymptoms(remainingSymptoms);
  };

  return (
    <main>
      <Header />
      <h1>Stimmung & Symptome</h1>

      <NewSymptom onAddSymptom={addSymptom} />
      <SymptomsList data={symptoms} onRemoveSymptom={removeItem} />
    </main>
  );
};
export default Symptome;

const ButtonStyle = styled.button`
  background: #f5f9f9;
  color: #509b9b;
  padding: 0 1.3rem;
  margin-bottom: 2rem;
  border: none;
  font-weight: bold;
  border-radius: 15px;
  margin-left: 5px;
  margin-top: 2rem;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  height: 5rem;
`;
