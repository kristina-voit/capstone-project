import TodoList from "../components/To-Do/TodoList.jsx";
import styled from "styled-components";
import Header from "../components/Header/Header.jsx";
import EventsListShort from "../components/Events/EventsListShort";
import MedicineListShort from "../components/Medicine/MedicineListShort";
import { eventsData } from "../components/Events/appointmentdata";
import { medicineData } from "../components/Medicine/medicinedata";

const Home = () => {
  return (
    <TodoListBlock>
      <Header />
      <Greeting>
        <p>Kristina, wie geht es Dir heute?</p>
      </Greeting>
      <div>
        <MedicineListShort data={medicineData} />
      </div>
      <div>
        <EventsListShort data={eventsData} />
      </div>

      <div>
        <TodoList />
      </div>
    </TodoListBlock>
  );
};
export default Home;

const TodoListBlock = styled.div`
  text-align: center;
`;

const Greeting = styled.div`
  //for further styling
`;
