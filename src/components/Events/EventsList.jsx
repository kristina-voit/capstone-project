
import Card from "../Events/Card";

export default function EventsList(props) {
  const eventsList = props.data.map((event) => (
    <Card
      id={event.id}
      name={event.name}
      datum={event.datum}
      fachrichtung={event.fachrichtung}
      adresse={event.adresse}
      telefon={event.telefon}
      email={event.email}
      website={event.website}
    />
  ));

  return <div>{eventsList}</div>;
}
