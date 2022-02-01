import { useState, useEffect } from "react";
import Header from "../components/Header/Header.jsx";
import SymptomsList from "../components/Symptoms/SymptomsList";
import NewSymptom from "../components/Symptoms/NewSymptom";
import Graph from "../components/Symptoms/MoodGraph";
import { journaldata } from "../components/Symptoms/journaldata";
import { loadFromLocal, saveToLocal } from "../lib/localStorage";
import styled from "styled-components";

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
      <Graph />

      <NewSymptom onAddSymptom={addSymptom} />
      <SymptomsList data={symptoms} onRemoveSymptom={removeItem} />
    </main>
  );
};
export default Symptome;
