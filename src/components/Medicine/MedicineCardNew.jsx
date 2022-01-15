import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    nameAndDose: "",
    einnahmehinweis: "",
    einnahmeMorgens: "",
    einnahmeMittags: "",
    einnahmeAbends: "",
    einnahmeNachts: "",
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const {
    nameAndDose,
    einnahmehinweis,
    einnahmeMorgens,
    einnahmeMittags,
    einnahmeAbends,
    einnahmeNachts,
  } = formData;

  return (
    <div>
      <Card>
        <p>Bitte folgende Felder ausfüllen:</p>
        <form>
          <Inputfield
            value={nameAndDose}
            onChange={(e) => updateFormData(e)}
            placeholder="Name und Dosierung"
            type="text"
            name="nameAndDose"
            required
          />
          <Inputfield
            value={einnahmehinweis}
            onChange={(e) => updateFormData(e)}
            placeholder="Einnahmehinweis"
            type="text"
            name="einnahmehinweis"
            required
          />
          <Inputfield
            value={einnahmeMorgens}
            onChange={(e) => updateFormData(e)}
            placeholder="Einnahme Morgens"
            type="text"
            name="einnahmeMorgens"
            required
          />
          <Inputfield
            value={einnahmeMittags}
            onChange={(e) => updateFormData(e)}
            placeholder="Einnahme Mittags"
            type="text"
            name="einnahmeMittags"
            required
          />
          <Inputfield
            value={einnahmeAbends}
            onChange={(e) => updateFormData(e)}
            placeholder="Einnahme Abends"
            type="text"
            name="einnahmeAbends"
            required
          />
          <Inputfield
            value={einnahmeNachts}
            onChange={(e) => updateFormData(e)}
            placeholder="Einnahme Nachts"
            type="text"
            name="einnahmeNachts"
            required
          />
        </form>
        <div>
          <NewMedicineButton type="submit">Hinzufügen</NewMedicineButton>
          <NewMedicineButton type="submit">Abbrechen</NewMedicineButton>
        </div>
      </Card>
    </div>
  );
};

export default Form;

const NewMedicineButton = styled.button`
  padding: 0 1.3rem;
  border: none;
  background: #509b9b;
  color: #4b417a;
  font-weight: bold;
  border-radius: 15px;
  margin-left: 5px;
  margin-top: 1rem;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  height: 2rem;
`;

const Inputfield = styled.input`
  flex-grow: 1;
  border: none;
  background: #f7f1f1;
  padding: 0 1.5em;
  margin: 0.5em;
  font-size: initial;
  font-family: "Montserrat", sans-serif;
  height: 2rem;
`;

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0px 0px 8px #ccc;
  background: #f6f5fb;
  color: #4b417a;
  margin: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
