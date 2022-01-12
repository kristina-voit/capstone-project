import React from "react";
import Card from "../Medicine/MedicineCard"

export default function MedicineList(props) {
  const medicineList = props.data.map((event) => (
    <Card
      id={event.id}
      name={event.name}
      einnahmehinweis={event.einnahmehinweis}
      einnahmeMorgens={event.einnahmeMorgens}
      einnahmeMittags={event.einnahmeMittags}
      einnahmeAbends={event.einnahmeAbends}
      einnahmeNachts={event.einnahmeNachts}

    />
  ));

  return <div>{medicineList}</div>;
}
