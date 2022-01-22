import Card from "./Card"

export default function SymptomsList(props) {
  const symptomsList = props.data.map((event) => (
    <Card
      id={event.id}
      stimmung={event.stimmung}
      datum={event.datum}
      notizen={event.notizen}
    />
  ));

  return <div>{symptomsList}</div>;
}
