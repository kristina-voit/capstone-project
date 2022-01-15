import styled from "styled-components";
import { useEffect, useState } from "react";
import NewMedicineInput from "./NewMedicineInput";
import { saveToLocal, loadFromLocal } from "../../lib/localStorage";

function NewMedicine() {
    const initialProduct = {
        name: "",
        contactEmail: "",
    };
    const [product, setProduct] = useState(initialProduct);
    const localStorageProducts = loadFromLocal("_products");
    const [products, setProducts] = useState(localStorageProducts ?? []);

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
        {
            setProducts([...products, product]);
        }
    };

    return (
        <div>
            <section>
                <Form onSubmit={handleSubmit}>
                    <FormInput
                        onNewMedicineInputChange={handleChange}
                        name="name"
                        value={product.name}
                        placeholder="Name, Dosierung"
                    ></FormInput>


                    <FormInput
                        onNewMedicineInputChange={handleChange}
                        name="hersteller"
                        value={product.hersteller}
                        placeholder="Hersteller"
                    ></FormInput>

                    <FormInput
                        onNewMedicineInputChange={handleChange}
                        name="einnahmehinweis"
                        value={product.einnahmehinweis}
                        placeholder="Einnahmehinweis"
                    ></FormInput>

                    <FormInput
                        onNewMedicineInputChange={handleChange}
                        name="einnahmeMorgens"
                        value={product.einnahmeMorgens}
                        placeholder="Einnahme Morgens"
                    ></FormInput>

                    <FormInput
                        onNewMedicineInputChange={handleChange}
                        name="einnahmeMittags"
                        value={product.einnahmeMittags}
                        placeholder="Einnahme Mittags"
                    ></FormInput>

                 
                    <FormInput
                        onNewMedicineInputChange={handleChange}
                        name="einnahmeAbends"
                        value={product.einnahmeAbends}
                        placeholder="Einnahme Abends"
                    >
                     </FormInput>
                  

                    <FormInput
                        onNewMedicineInputChange={handleChange}
                        name="einnahmeNachts"
                        value={product.einnahmeNachts}
                        placeholder="Einnahme Nachts"
                    ></FormInput>

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
            </section>

            <Card>
                {products.map((product, index) => (
                    <article>

                       
                            <CardTitle>{product.name}</CardTitle>
                            <CardTitle>{product.hersteller}</CardTitle>
                            <p>{product.einnahmehinweis}</p>
                            <div>
                                {product.einnahmeMorgens}
                                {product.einnahmeMittags}
                                {product.einnahmeAbends}
                                {product.einnahmeNachts}
                            </div>
                   


                    </article>
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

const FormInput = styled.input`
  flex-grow: 1;
  border: solid 1px gray;
  margin: 0.25rem;
  background: #f7f1f1;
  padding: 0 1.5em;
  height: 2rem;
`;