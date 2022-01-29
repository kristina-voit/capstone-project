import styled from "styled-components";
import { useState } from "react";
import NewEventInput from "./NewEventInput";
import isAppointmentValid from "../../lib/validationAppointment";

function NewAppointment({ onAddAppointment }) {
  const initialAppointment = {
    arztname: "",
    datum: "",
    fachrichtung: "",
    adresse: "",
    telefon: "",
    email: "",
    website: "",
  };
  const [appointment, setAppointment] = useState(initialAppointment);

  const [hasFormErrors, setHasFormErrors] = useState(false);

  const handleChange = (event) => {
    let inputValue = event.target.value;

    setAppointment({
      ...appointment,
      [event.target.name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isAppointmentValid(appointment)) {
      onAddAppointment(appointment);
      setHasFormErrors(false);
    } else {
      setHasFormErrors(true);
    }
  };

  return (
    <section>
      <details>
        <summary>Neuen Termin eintragen</summary>
        {hasFormErrors && (
          <ErrorMessage>
            <p>Bitte füllen Sie alle Felder korrekt aus.</p>
          </ErrorMessage>
        )}
        <Form onSubmit={handleSubmit}>
          <NewEventInput
            onNewEventInputChange={handleChange}
            name="arztname"
            value={appointment.arztname}
            placeholder="Name"
          ></NewEventInput>

          <NewEventInput
            onNewEventInputChange={handleChange}
            name="datum"
            value={appointment.datum}
            placeholder="Datum, Uhrzeit"
          ></NewEventInput>

          <NewEventInput
            onNewEventInputChange={handleChange}
            name="fachrichtung"
            value={appointment.fachrichtung}
            placeholder="Fachrichtung"
          ></NewEventInput>

          <NewEventInput
            onNewEventInputChange={handleChange}
            name="adresse"
            value={appointment.adresse}
            placeholder="Adresse"
          ></NewEventInput>

          <NewEventInput
            onNewEventInputChange={handleChange}
            name="telefon"
            value={appointment.telefon}
            placeholder="Telefon"
          ></NewEventInput>

          <NewEventInput
            onNewEventInputChange={handleChange}
            name="email"
            value={appointment.email}
            placeholder="Email-Adresse"
          ></NewEventInput>

          <NewEventInput
            onNewEventInputChange={handleChange}
            name="website"
            value={appointment.website}
            placeholder="Website"
          ></NewEventInput>

          <div>
            <Button>Termin hinzufügen</Button>

            <Button
              type="reset"
              onClick={() => {
                setAppointment(initialAppointment);
              }}
            >
              Zurücksetzen
            </Button>
          </div>
        </Form>
      </details>
    </section>

    /* {appointments.map((appointment, index) => (
          <article>
             <Section>
            <FullCardContent>
              <CardTitle>{appointment.arztname}</CardTitle>
              <Description>{appointment.datum}</Description>
              <Description>{appointment.fachrichtung}</Description>
              <Description>{appointment.adresse}</Description>

              <Icons>
                <a target="_blank" href={appointment.website}>
                  <SingleIcon src={WebsiteIcon} alt="Homepage" />
                </a>
                <a
                  href={`mailto:${appointment.email}?subject=Anfrage von Kristina Voit, *13.01.1989`}
                >
                  <SingleIcon src={EmailIcon} alt="Email" />
                </a>

                <a href={`tel:${appointment.telefon}`}>
                  <SingleIcon src={CallIcon} alt="Call" />
                </a>
              </Icons>
              <div>
              <Button
                onClick={() => {
                  removeItem(appointment);
                }}
              >
                Entfernen
              </Button>
              </div>
            </FullCardContent>
            </Section>
          </article>
              ))}*/
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
`;

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

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  background: #fff4f4;
  color: #4b417a;
  margin: 1rem;
  padding: 1rem;
`;

const Button = styled.button`
  padding: 0 1.3rem;
  border: none;
  background: #509b9b;
  color: #4b417a;
  font-weight: bold;
  border-radius: 15px;
  margin-left: 5px;
  margin-top: 1rem;
  justify-content: right;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  height: 2rem;
`;

const CardTitle = styled.p`
  font-weight: 600;
  margin: 12px 0 0 0;
  text-align: left;
`;

const Description = styled.p`
  text-align: left;
`;

const FullCardContent = styled.div`
  padding: 0 0 4px 0;
  margin: 1rem;
`;

const Icons = styled.div`
  display: flex;
  padding: 0.5rem;
  margin: 0.5rem;
  justify-content: right;
`;

const SingleIcon = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const ErrorMessage = styled.div`
  align-items: center;
  background: var(--warning);
  border-radius: 6px;
  color: white;
  margin: 0 0 1rem;
`;

const Summary = styled.div`
  color: green;
`;