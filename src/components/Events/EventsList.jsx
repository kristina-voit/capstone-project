import Card from '../Events/Card';

export default function EventsList({ data, onRemoveAppointment }) {
  const eventsList = data.map((props, index) => (
    <Card
      key={index}
      name={props.arztname}
      datum={props.datum}
      fachrichtung={props.fachrichtung}
      adresse={props.adresse}
      telefon={props.telefon}
      email={props.email}
      website={props.website}
      onRemoveAppointment={onRemoveAppointment}
    />
  ));

  return <div>{eventsList}</div>;
}
