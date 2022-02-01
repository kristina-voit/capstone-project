import { useState } from "react";
import NewSymptomInput from "./NewSymptomInput";
import isSymptomValid from "../../lib/validationSymptom";
import RadioButton from "./RadioButton";

import styled from "styled-components";

function NewSymptom({ onAddSymptom }) {
  const initialSymptom = {
    stimmung: "",
    datum: "",
    notizen: "",
  };
  const [symptom, setSymptom] = useState(initialSymptom);

  const [hasFormErrors, setHasFormErrors] = useState(false);

  const handleChange = (event) => {
    let inputValue = event.target.value;

    setSymptom({
      ...symptom,
      [event.target.name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSymptomValid(symptom)) {
      onAddSymptom(symptom);
      setHasFormErrors(false);
    } else {
      setHasFormErrors(true);
    }
  };

  return (
    <div>
      <section>
        <details>
          <summary>Stimmung & Symptome hinzufügen</summary>
          {hasFormErrors && (
            <ErrorMessage>
              <p>Bitte füllen Sie alle Felder korrekt aus.</p>
            </ErrorMessage>
          )}

          <Form onSubmit={handleSubmit}>
            <RadioButton value={symptom.stimmung} onRadioChange={handleChange}>
              Stimmung
            </RadioButton>

            <NewSymptomInput
              onNewSymptomInputChange={handleChange}
              type="text"
              name="stimmung"
              value={symptom.stimmung}
              placeholder="Stimmung"
            ></NewSymptomInput>

            <NewSymptomInput
              onNewSymptomInputChange={handleChange}
              name="datum"
              type="date"
              pattern="(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}"
              value={symptom.datum}
              placeholder="Datum"
            ></NewSymptomInput>

            <NewSymptomInput
              onNewSymptomInputChange={handleChange}
              name="notizen"
              type="text"
              value={symptom.notizen}
              placeholder="Notizen"
            ></NewSymptomInput>

            <div>
              <Button>Hinzufügen</Button>

              <Button
                type="reset"
                onClick={() => {
                  setSymptom(initialSymptom);
                }}
              >
                Zurücksetzen
              </Button>
            </div>
          </Form>
        </details>
      </section>
    </div>
  );
}

export default NewSymptom;

const Button = styled.button`
  background: #fff;
  border-radius: 15px;
  border: none;
  border: solid 2px #509b9b;
  color: #509b9b;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  height: 2rem;
  margin-left: 5px;
  padding: 0 1.3rem;
`;

const ErrorMessage = styled.div`
  align-items: center;
  border-radius: 6px;
  color: white;
  margin: 0 0 1rem;
`;

const Form = styled.form`
  background: #f5f9f9;
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  color: #4b417a;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  margin: 1rem;
  padding: 1rem;
`;
