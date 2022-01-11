import React from 'react';
import EventsList from "../components/Events/EventsList"
import { eventsData } from "../components/Events/appointmentdata"

const Termine = () =>{
  return (
    
      <div>
        <EventsList data={eventsData} />
      </div>
   
  );
}
export default Termine;
