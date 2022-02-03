import Card from './CardShort';

export default function EventsList(props) {
  const eventsList = props.data.map((event) => (
    <Card
      id={event.id}
      datum={event.datum}
      name={event.name}
      fachrichtung={event.fachrichtung}
    />
  ));

  return <div>{eventsList}</div>;
}
