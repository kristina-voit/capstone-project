import React, { useState } from 'react';
import styled from 'styled-components';

const Form = () => {
  const [formData, setFormData] = useState({
    nameAndDose: '',
    einnahmehinweis: '',
    einnahmeMorgens: '',
    einnahmeMittags: '',
    einnahmeAbends: '',
    einnahmeNachts: '',
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

const Card = styled.div`
  background: #f6f5fb;
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  color: #4b417a;
  margin: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

const Inputfield = styled.input`
  background: #f7f1f1;
  border: none;
  flex-grow: 1;
  font-family: 'Montserrat', sans-serif;
  font-size: initial;
  height: 2rem;
  margin: 0.5em;
  padding: 0 1.5em;
`;

const NewMedicineButton = styled.button`
  background: #fff;
  border-radius: 15px;
  border: solid 2px #509b9b;
  border: none;
  color: #509b9b;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  height: 2rem;
  margin-left: 5px;
  margin-top: 1rem;
  padding: 0 1.3rem;
`;
