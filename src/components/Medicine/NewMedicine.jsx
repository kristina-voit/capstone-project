import styled from "styled-components";
import { useEffect, useState } from "react";
import NewMedicineInput from "./NewMedicineInput";
import { saveToLocal, loadFromLocal } from "../../lib/localStorage";
import Morning from "../../images/sunrise.svg";
import Noon from "../../images/noon.svg";
import Evening from "../../images/sunset.svg";
import Night from "../../images/night.svg";
import isProductValid from "../../lib/validationMedicine"

function NewMedicine() {
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
  const localStorageProducts = loadFromLocal("_products");
  const [products, setProducts] = useState(localStorageProducts ?? []);

  const removeItem = () => localStorage.removeItem("_products");

  const [hasFormErrors, setHasFormErrors] = useState(false);


  useEffect(() => {
    saveToLocal("_products", products);
  }, [products]);

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
      setProducts([...products, product]);
      setHasFormErrors(false);
    } else {
      setHasFormErrors(true);
    }
  };


  return (
    <div>
      <section>
      <details>
          <summary>Neues Medikament eintragen</summary>
      {hasFormErrors && (
          <ErrorMessage>
            <p>
              Bitte füllen Sie alle Felder korrekt aus.
            </p>
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

      <Card>
        {products.map((product, index) => (
          <Article>
            <CardTitle>{product.name}</CardTitle>
            <CardTitle>{product.hersteller}</CardTitle>
            <p>{product.einnahmehinweis}</p>
            <FullCardContent>
              <Description>{product.einnahmeMorgens} </Description>
              <Description> {product.einnahmeMittags} </Description>
              <Description> {product.einnahmeAbends} </Description>
              <Description> {product.einnahmeNachts} </Description>

              <IconStyling src={Morning} alt="Morning" />
              <IconStyling src={Noon} alt="Noon" />
              <IconStyling src={Evening} alt="Evening" />
              <IconStyling src={Night} alt="Night" />
            </FullCardContent>
            <Button onClick={removeItem}>Entfernen</Button>
          </Article>
        ))}
      </Card>
    </div>
  );
}

export default NewMedicine;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  border-radius: 15px;
  box-shadow: 0px 0px 8px #ccc;
  background: #f6f5fb;
  color: #4b417a;
  margin: 1rem;
  padding-top: 0.1rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  border-radius: 15px;
  box-shadow: 0px 0px 8px #ccc;
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
  margin-top: 1rem;

  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  height: 2rem;
`;
const CardTitle = styled.p`
  font-weight: 600;
  margin: 12px 0px 0px 0px;
`;

const IconStyling = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const FullCardContent = styled.div`
  padding: 0px 0px 4px 0px;

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

const Article = styled.article`
  padding-bottom: 1rem;
`;

const ErrorMessage = styled.div`
  align-items: center;
  background: var(--warning);
  border-radius: 6px;
  color: white;
  margin: 0 0 1rem;
  `