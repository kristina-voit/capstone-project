import styled from "styled-components";
import { useState } from "react";
import NewMedicineInput from "./NewMedicineInput";
import isProductValid from "../../lib/validationMedicine";

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

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  background: #f6f5fb;
  color: #4b417a;
  margin: 1rem;
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
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  height: 2rem;
`;
const CardTitle = styled.p`
  font-weight: 600;
  margin: 12px 0 0 0;
`;

const IconStyling = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const FullCardContent = styled.div`
  padding: 0 0 4px 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;

const Description = styled.p`
  font-size: 14;
  margin: 8px 0 0 0;
  font-weight: 600;
`;

const Article = styled.article``;

const ErrorMessage = styled.div`
  align-items: center;
  background: var(--warning);
  border-radius: 6px;
  color: white;
  margin: 0 0 1rem;
`;
