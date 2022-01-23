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
 
      <ButtonStyle class href="/symptome">
      Stimmung & Symptome verwalten

      </ButtonStyle>
    
      

{/*<Mood/>*/}



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
font-size: 20px;
`;

const ButtonStyle = styled.a`
  background: #f5f9f9;
  color: #509b9b;
  border: none;
  font-weight: bold;
  text-decoration:none;
  border-radius: 15px;
  margin-left: 5px;
  margin-top: 1rem;
  margin-bottom: 40px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
 
`;