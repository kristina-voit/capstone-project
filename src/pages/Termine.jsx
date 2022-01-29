import { useState, useEffect } from "react";
import NewAppointment from "../components/Events/NewAppointment";
import EventsList from "../components/Events/EventsList";
import { appointmentsData } from "../components/Events/appointmentdata";
import Header from "../components/Header/Header.jsx";
import styled from "styled-components";
import { loadFromLocal, saveToLocal } from "../lib/localStorage";
import Search from "../components/Events/Search";

const Termine = () => {
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

  function addAppointment(appointment) {
    setAppointments([appointment, ...appointments]);
  }

  const removeItem = (appointmentName) => {
    const remainingAppointments = appointments.filter(
      (appointment) => appointment.arztname !== appointmentName
    );
    setAppointments(remainingAppointments);
  };

  return (
    <main>
      <div>
        <Header />
        <h1>Deine anstehenden Termine</h1>
        <NewAppointment onAddAppointment={addAppointment} />
        {/*} <Search />*/}
        <EventsList data={appointments} onRemoveAppointment={removeItem} />

        <a target="_blank" href="https://jameda.de">
          <ButtonStyle>Neuen Termin finden</ButtonStyle>
        </a>
      </div>
    </main>
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

  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  height: 5rem;
`;
