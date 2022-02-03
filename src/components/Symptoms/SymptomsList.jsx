import Card from './Card';

export default function SymptomsList(props) {
  const symptomsList = props.data.map((props) => (
    <Card
      id={props.id}
      stimmung={props.stimmung}
      datum={props.datum}
      notizen={props.notizen}
    />
  ));

  return <div>{symptomsList}</div>;
}
