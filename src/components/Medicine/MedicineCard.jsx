import styled from "styled-components";
import Morning from "../../images/sunrise.svg";
import Noon from "../../images/noon.svg";
import Evening from "../../images/sunset.svg";
import Night from "../../images/night.svg";

function CardContent(props) {
  return (
    <div>
      <CardTitle>{props.name}</CardTitle>
      <CardTitle>{props.einnahmehinweis}</CardTitle>
      <CardTitle>{props.hersteller}</CardTitle>
      <FullCardContent>
        <Description>{props.einnahmeMorgens}</Description>
        <Description>{props.einnahmeMittags}</Description>
        <Description>{props.einnahmeAbends}</Description>
        <Description>{props.einnahmeNachts}</Description>
        <IconStyling src={Morning} alt="Morning" />
        <IconStyling src={Noon} alt="Noon" />
        <IconStyling src={Evening} alt="Evening" />
        <IconStyling src={Night} alt="Night" />
      </FullCardContent>
    </div>
  );
}

export default function Card(props) {
  return (
    <SingleCard id={props.id}>
      <CardTitle>{props.name}</CardTitle>
      <CardTitle>{props.hersteller}</CardTitle>
      <p>{props.einnahmehinweis}</p>
      <CardContent
        einnahmeMorgens={props.einnahmeMorgens}
        einnahmeMittags={props.einnahmeMittags}
        einnahmeAbends={props.einnahmeAbends}
        einnahmeNachts={props.einnahmeNachts}
      />
      <Button onClick={() => props.onRemoveProduct(props.name)}>
        Entfernen
      </Button>
    </SingleCard>
  );
}

const Button = styled.button`
  padding: 0 1.3rem;
  border: none;
  background: #509b9b;
  color: #4b417a;
  font-weight: bold;
  border-radius: 15px;
  margin-left: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  height: 2rem;
`;

const CardTitle = styled.p`
  color: #4b417a;
  font-size: 14;
  margin: 8px 0 0 0;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 14;
  margin: 8px 0 0 0;
  font-weight: 600;
`;

const FullCardContent = styled.div`
  padding: 0 0 4px 0;
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;

const IconStyling = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const SingleCard = styled.div`
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  background: #f6f5fb;
  color: #4b417a;
  margin: 1rem;
  padding-top: 0.1rem;
`;
