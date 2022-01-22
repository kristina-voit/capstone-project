import NewEvent from "../components/Events/NewEvent";
import EventsList from "../components/Events/EventsList";
import { eventsData } from "../components/Events/appointmentdata";
import Header from "../components/Header/Header.jsx";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Termine = () => {
  return (
    <div>
      <Header />
      <h1>Deine anstehenden Termine</h1>

      <NewEvent />

      <EventsList data={eventsData} />

      <a target="_blank" href="https://jameda.de">
        <ButtonStyle>Neuen Termin finden</ButtonStyle>
      </a>
    </div>
  );
};
export default Termine;

const ButtonStyle = styled.button`
  background: #f5f9f9;
  color: #509b9b;
  padding: 0.2;
  border: none;
  font-weight: bold;
  border-radius: 15px;
  margin-left: 5px;
  margin-top: 1rem;
  margin-bottom: 40px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  height: 5rem;
`;
