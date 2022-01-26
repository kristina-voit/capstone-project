import styled from "styled-components";
import { useState } from "react";
import { loadFromLocal } from "../../lib/localStorage";

function NewAppointment() {
 
  const localStorageAppointments = loadFromLocal("_appointments");
  const [appointments, setAppointments] = useState(
    localStorageAppointments ?? []
  );

 
  return (
    <div>
   
        {appointments.map((appointment, index) => (
          <article>  
            <Section>
            <FullCardContent>
              <Description>{appointment.datum}</Description>
              <CardTitle>{appointment.arztname}</CardTitle>
              <Description>{appointment.fachrichtung}</Description>
            </FullCardContent>
            </Section>
          </article>
        ))}
  
    </div>
  );
}

export default NewAppointment;

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  background: #fff4f4;
  color: #4b417a;
  margin: 1rem;
`

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  background: #fff4f4;
  color: #4b417a;
  margin: 1rem;
  padding-top: 0.1rem;
`;

const FullCardContent = styled.div`
  text-align: left;
  margin: 1rem;
`;

const CardTitle = styled.p`
  font-weight: 600;
  margin: 12px 0 0 0;
`;

const Description = styled.p`
  font-size: 14;
  margin: 8px 0 0 0;
`;
