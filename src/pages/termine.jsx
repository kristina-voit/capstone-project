import React from 'react';
import EventsList from "../components/Events/EventsList"
import { eventsData } from "../components/Events/appointmentdata"
import logo from "../images/statusbar.svg"

const Termine = () =>{
  return (
    
      <div>
        <h1>Deine anstehenden Termine</h1>
        <EventsList data={eventsData} />
      </div>
   
  );
}
export default Termine;

{/*<img src={logo} className="Statusbar" alt="logo" />*/}