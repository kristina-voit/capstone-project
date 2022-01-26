import Card from "../Events/Card";

export default function EventsList({ data, onRemoveAppointment }) {
  const eventsList = data.map((appointment) => (
    <Card
      id={appointment.id}
      name={appointment.arztname}
      datum={appointment.datum}
      fachrichtung={appointment.fachrichtung}
      adresse={appointment.adresse}
      telefon={appointment.telefon}
      email={appointment.email}
      website={appointment.website}
      onRemoveAppointment={onRemoveAppointment}
    />
  ));

  return <div>{eventsList}</div>;
}
