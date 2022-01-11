import React from "react";
import Card from "./MedicineCardShort";

export default function MedicineList(props) {
  const medicineList = props.data.map((event) => (
    <Card
    id={event.id}
    name={event.name}
    />
  ));

  return <div>{medicineList}</div>;
}
