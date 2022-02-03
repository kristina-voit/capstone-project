import { useState, useEffect } from 'react';
import MedicineList from '../components/Medicine/MedicineList';
import Header from '../components/Header/Header.jsx';
import NewMedicine from '../components/Medicine/NewMedicine';
import { medicineData } from '../components/Medicine/medicinedata';
import { loadFromLocal, saveToLocal } from '../lib/localStorage';
import styled from 'styled-components';

const Medikamente = () => {
  const [products, setProducts] = useState(medicineData);

  useEffect(() => {
    const storageData = loadFromLocal('_products');
    if (storageData && storageData.length > 0) {
      setProducts(storageData);
    }
  }, []);

  useEffect(() => {
    saveToLocal('_products', products);
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
  background: #509b9b;
  border-radius: 15px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: #fff;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  height: 5rem;
  margin-left: 5px;

  padding: 2rem;
`;
