import { useState } from "react";
import NewMedicineInput from "./NewMedicineInput";
import isProductValid from "../../lib/validationMedicine";
import styled from "styled-components";

function NewMedicine({ onAddProduct }) {
  const initialProduct = {
    name: "",
    hersteller: "",
    einnahmehinweis: "",
    einnahmeMorgens: "",
    einnahmeMittags: "",
    einnahmeAbends: "",
    einnahmeNachts: "",
  };
  const [product, setProduct] = useState(initialProduct);

  const [hasFormErrors, setHasFormErrors] = useState(false);

  const handleChange = (event) => {
    let inputValue = event.target.value;

    setProduct({
      ...product,
      [event.target.name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isProductValid(product)) {
      onAddProduct(product);
      setHasFormErrors(false);
    } else {
      setHasFormErrors(true);
    }
  };

  return (
    <section>
      <details>
        <summary>Neues Medikament eintragen</summary>
        {hasFormErrors && (
          <ErrorMessage>
            <p>Bitte füllen Sie alle Felder korrekt aus.</p>
          </ErrorMessage>
        )}
        <Form onSubmit={handleSubmit}>
          <NewMedicineInput
            onNewMedicineInputChange={handleChange}
            name="name"
            value={product.name}
            placeholder="Name, Dosierung"
          ></NewMedicineInput>

          <NewMedicineInput
            onNewMedicineInputChange={handleChange}
            name="hersteller"
            value={product.hersteller}
            placeholder="Hersteller"
          ></NewMedicineInput>

          <NewMedicineInput
            onNewMedicineInputChange={handleChange}
            name="einnahmehinweis"
            value={product.einnahmehinweis}
            placeholder="Einnahmehinweis"
          ></NewMedicineInput>

          <NewMedicineInput
            onNewMedicineInputChange={handleChange}
            name="einnahmeMorgens"
            value={product.einnahmeMorgens}
            placeholder="Einnahme Morgens"
          ></NewMedicineInput>

          <NewMedicineInput
            onNewMedicineInputChange={handleChange}
            name="einnahmeMittags"
            value={product.einnahmeMittags}
            placeholder="Einnahme Mittags"
          ></NewMedicineInput>

          <NewMedicineInput
            onNewMedicineInputChange={handleChange}
            name="einnahmeAbends"
            value={product.einnahmeAbends}
            placeholder="Einnahme Abends"
          ></NewMedicineInput>

          <NewMedicineInput
            onNewMedicineInputChange={handleChange}
            name="einnahmeNachts"
            value={product.einnahmeNachts}
            placeholder="Einnahme Nachts"
          ></NewMedicineInput>

          <div>
            <Button>Medikament hinzufügen</Button>

            <Button
              type="reset"
              onClick={() => {
                setProduct(initialProduct);
              }}
            >
              Zurücksetzen
            </Button>
          </div>
        </Form>
      </details>
    </section>
  );
}

export default NewMedicine;

const Button = styled.button`
  align-items: center;
  background: #509b9b;
  border-radius: 15px;
  border: none;
  color: #4b417a;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding: 0 1.3rem;

  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  height: 2rem;
`;

const ErrorMessage = styled.div`
  align-items: center;
  background: var(--warning);
  border-radius: 6px;
  color: white;
  margin: 0 0 1rem;
`;

const Form = styled.form`
  background: #f6f5fb;
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  color: #4b417a;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  margin: 1rem;
  padding: 1rem;
`;
