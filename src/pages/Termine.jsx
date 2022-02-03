import { useState, useEffect } from 'react';
import NewAppointment from '../components/Events/NewAppointment';
import EventsList from '../components/Events/EventsList';
import Header from '../components/Header/Header.jsx';
import { appointmentsData } from '../components/Events/appointmentdata';
import { loadFromLocal, saveToLocal } from '../lib/localStorage';
import styled from 'styled-components';

const Termine = () => {
  const [appointments, setAppointments] = useState(appointmentsData);

  useEffect(() => {
    const storageData = loadFromLocal('_appointments');
    if (storageData && storageData.length > 0) {
      setAppointments(storageData);
    }
  }, []);

  useEffect(() => {
    saveToLocal('_appointments', appointments);
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
