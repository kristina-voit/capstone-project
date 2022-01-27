import { useState, useEffect } from "react";
import MedicineList from "../components/Medicine/MedicineList";
import { medicineData } from "../components/Medicine/medicinedata";
import Header from "../components/Header/Header.jsx";
import styled from "styled-components";
import NewMedicine from "../components/Medicine/NewMedicine";
import { loadFromLocal, saveToLocal } from "../lib/localStorage";

const Medikamente = () => {
  const [products, setProducts] = useState(medicineData);

  useEffect(() => {
    const storageData = loadFromLocal("_products");
    if (storageData && storageData.length > 0) {
      setProducts(storageData);
    }
  }, []);

  useEffect(() => {
    saveToLocal("_products", products);
  }, [products]);

  function addProduct(product) {
    setProducts([product, ...products]);
  }

  const removeItem = (productName) => {
    const remainingProducts = products.filter(
      (product) => product.name !== productName
    );
    setProducts(remainingProducts);
  };

  return (
    <main>
      <div>
        <Header />
        <h1>Deine Medikamente</h1>

        <NewMedicine onAddProduct={addProduct} />
        <MedicineList data={products} onRemoveProduct={removeItem} />

        <a
          target="_blank"
          href="https://www.apotheken-umschau.de/medikamente/wechselwirkungscheck/"
        >
          <ButtonStyle>Wechselwirkungen prüfen</ButtonStyle>
        </a>
      </div>
    </main>
  );
};
export default Medikamente;

const ButtonStyle = styled.button`
  background: #f5f9f9;
  color: #509b9b;
  border: none;
  font-weight: bold;
  border-radius: 15px;
  margin-left: 5px;

  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  height: 5rem;
`;
