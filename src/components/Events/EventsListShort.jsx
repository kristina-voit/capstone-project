import React from "react";
import Card from "./CardShort";

export default function EventsList(props) {
  const eventsList = props.data.map((event) => (
    <Card
      id={event.id}
      name={event.name}
      datum={event.datum}
      fachrichtung={event.fachrichtung}
    />
  ));

  return <div>{eventsList}</div>;
}
