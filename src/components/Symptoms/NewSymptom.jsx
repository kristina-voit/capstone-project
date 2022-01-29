import styled from "styled-components";
import { useState } from "react";
import NewSymptomInput from "./NewSymptomInput";
import isSymptomValid from "../../lib/validationSymptom";
import RadioButton from "./RadioButton";

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
              name="stimmung"
              value={symptom.stimmung}
              placeholder="Stimmung"
            ></NewSymptomInput>

            <NewSymptomInput
              onNewSymptomInputChange={handleChange}
              name="datum"
              value={symptom.datum}
              placeholder="Datum"
            ></NewSymptomInput>

            <NewSymptomInput
              onNewSymptomInputChange={handleChange}
              name="notizen"
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

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  background: #f6f5fb;
  color: #4b417a;
  margin: 1rem;
  padding-top: 0.1rem;
  padding: 1rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  background: #f6f5fb;
  color: #4b417a;
  margin: 1rem;
  padding: 1rem;
`;

const Button = styled.button`
  padding: 0 1.3rem;
  border: none;
  background: #509b9b;
  color: #4b417a;
  font-weight: bold;
  border-radius: 15px;
  margin-left: 5px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  height: 2rem;
`;
const CardTitle = styled.p`
  font-weight: 600;
  margin: 12px 0 0 0;
`;
const ErrorMessage = styled.div`
  align-items: center;
  background: var(--warning);
  border-radius: 6px;
  color: white;
  margin: 0 0 1rem;
`;
const Container = styled.div`
  background: #d7d4e3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const IconStyling = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const FullCardContent = styled.div`
  padding: 0 0 4px 0;
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;
