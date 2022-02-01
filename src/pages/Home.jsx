import { useState, useEffect } from "react";
import TodoList from "../components/To-Do/TodoList.jsx";
import Header from "../components/Header/Header.jsx";
import NewEventShort from "../components/Events/NewEventShort";
import NewMedicineShort from "../components/Medicine/NewMedicineShort";
import { medicineData } from "../components/Medicine/medicinedata";
import { appointmentsData } from "../components/Events/appointmentdata";
import { loadFromLocal, saveToLocal } from "../lib/localStorage";
import styled from "styled-components";

const Home = () => {
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

  const [appointments, setAppointments] = useState(appointmentsData);

  useEffect(() => {
    const storageData = loadFromLocal("_appointments");
    if (storageData && storageData.length > 0) {
      setAppointments(storageData);
    }
  }, []);

  useEffect(() => {
    saveToLocal("_appointments", appointments);
  }, [appointments]);

  return (
    <main>
      <TodoListBlock>
        <Header />
        <Greeting>
          <p>Kristina, wie geht es Dir heute?</p>
        </Greeting>

        <ButtonStyle class href="/symptome">
          Stimmung & Symptome verwalten
        </ButtonStyle>

        <div>
          <NewMedicineShort products={products} />
        </div>

        <div>
          <NewEventShort appointments={appointments} />
        </div>

        <div>
          <TodoList />
        </div>
      </TodoListBlock>
    </main>
  );
};
export default Home;

const ButtonStyle = styled.a`
  background: #f5f9f9;
  border-radius: 15px;
  border: none;
  color: #509b9b;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin-left: 5px;
  margin-top: 1rem;
  text-decoration: none;
`;

const Greeting = styled.div`
  font-size: 20px;
`;

const TodoListBlock = styled.div`
  text-align: center;
`;
