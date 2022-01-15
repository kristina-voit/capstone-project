import Card from "./MedicineCardShort";

export default function MedicineList(props) {
  const medicineList = props.data.map((event) => (
    <Card
      id={event.id}
      name={event.name}
      einnahmeMorgens={event.einnahmeMorgens}
      einnahmeMittags={event.einnahmeMittags}
      einnahmeAbends={event.einnahmeAbends}
      einnahmeNachts={event.einnahmeNachts}
    />
  ));
  return <div>{medicineList}</div>;
}
