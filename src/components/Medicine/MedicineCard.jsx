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
    <div>
      <div>
        <SingleCard id={props.id}>
          <h4>{props.name}</h4>
          <p>{props.einnahmehinweis}</p>
          <CardContent
            einnahmeMorgens={props.einnahmeMorgens}
            einnahmeMittags={props.einnahmeMittags}
            einnahmeAbends={props.einnahmeAbends}
            einnahmeNachts={props.einnahmeNachts}
          />
        </SingleCard>
      </div>
    </div>
  );
}

const FullCardContent = styled.div`
  padding: 0px 0px 4px 0px;
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;

const CardTitle = styled.p`
  font-size: 8px;
  color: #4b417a;
`;

const SingleCard = styled.div`
  border-radius: 15px;
  box-shadow: 0px 0px 8px #ccc;
  background: #f6f5fb;
  color: #4b417a;
  margin: 1rem;
  padding-top: 0.1rem;
`;

const Description = styled.p`
  font-size: 14;
  margin: 8px 0 0 0;
  font-weight: 600;
`;

const Icons = styled.div`
  display: flex;
  padding: 0.5rem;
  margin: 0.5rem;
`;

const IconStyling = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;
