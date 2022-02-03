import styled from 'styled-components';
import Morning from '../../images/sunrise.svg';
import Noon from '../../images/noon.svg';
import Evening from '../../images/sunset.svg';
import Night from '../../images/night.svg';
import Dosage from '../Medicine/Dosage';

function CardContent(props) {
  return (
    <div>
      <CardTitle>{props.name}</CardTitle>
      <FullCardContent>
        <Dosage einnahmeMenge={props.einnahmeMorgens} />
        <Dosage einnahmeMenge={props.einnahmeMittags} />
        <Dosage einnahmeMenge={props.einnahmeAbends} />
        <Dosage einnahmeMenge={props.einnahmeNachts} />
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
        <SingleCard>
          <div></div>
          <CardTitle>{props.name}</CardTitle>
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

const CardTitle = styled.p`
  color: #4b417a;
  font-size: 14;
  font-weight: 600;
  margin: 8px 0 0 0;
`;

const FullCardContent = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  margin: 1rem;
  padding: 0 0 4px 0;
`;

const IconStyling = styled.img`
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

const SingleCard = styled.div`
  background: #f6f5fb;
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: #4b417a;
  margin: 1rem;
  padding-top: 0.1rem;
`;
