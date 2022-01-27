import TodoList from "../components/To-Do/TodoList.jsx";
import styled from "styled-components";
import Header from "../components/Header/Header.jsx";
import NewEventShort from "../components/Events/NewEventShort";
import EventsListShort from "../components/Events/EventsListShort";
import NewMedicineShort from "../components/Medicine/NewMedicineShort";
import MedicineListShort from "../components/Medicine/MedicineListShort";

import { appointmentsData } from "../components/Events/appointmentdata";
import { medicineData } from "../components/Medicine/medicinedata";

const Home = () => {
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
          <NewMedicineShort />
        </div>

        <div>
          <NewEventShort />
        </div>
        <div></div>
        <div>
          <TodoList />
        </div>
      </TodoListBlock>
    </main>
  );
};
export default Home;

const TodoListBlock = styled.div`
  text-align: center;
`;

const Greeting = styled.div`
  font-size: 20px;
`;

const ButtonStyle = styled.a`
  background: #f5f9f9;
  color: #509b9b;
  border: none;
  font-weight: bold;
  text-decoration: none;
  border-radius: 15px;
  margin-left: 5px;
  margin-top: 1rem;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
`;
