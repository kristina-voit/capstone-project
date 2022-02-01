import styled from "styled-components";
import WebsiteIcon from "../../images/homepage.svg";
import CallIcon from "../../images/phone.svg";
import EmailIcon from "../../images/email.svg";

function CardContent(props) {
  return (
    <FullCardContent>
      <CardTitle>{props.name}</CardTitle>
      <Description>{props.datum}</Description>
      <Description>{props.fachrichtung}</Description>
      <Description>{props.adresse}</Description>

      <Icons>
        <a target="_blank" href={props.website}>
          <SingleIcon src={WebsiteIcon} alt="Homepage" />
        </a>
        <a
          href={`mailto:${props.email}?subject=Anfrage von Kristina Voit, *13.01.1989`}
        >
          <SingleIcon src={EmailIcon} alt="Email" />
        </a>

        <a href={`tel:${props.telefon}`}>
          <SingleIcon src={CallIcon} alt="Call" />
        </a>
      </Icons>
    </FullCardContent>
  );
}
export default function Card(props) {
  return (
    <div>
      <SingleCard id={props.id}>
        <CardContent
          name={props.name}
          datum={props.datum}
          fachrichtung={props.fachrichtung}
          adresse={props.adresse}
          email={props.email}
          website={props.website}
          telefon={props.telefon}
        />
        <Button onClick={() => props.onRemoveAppointment(props.name)}>
          Entfernen
        </Button>
      </SingleCard>
    </div>
  );
}

const Button = styled.button`
  background: #509b9b;
  border-radius: 15px;
  border: none;
  color: #4b417a;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  height: 2rem;
  margin-bottom: 1rem;
  margin-left: 5px;
  margin-top: 1rem;
  padding: 0 1.3rem;
`;

const CardTitle = styled.p`
  font-weight: 600;
  margin: 12px 0 0 0;
  text-align: left;
`;

const Description = styled.p`
  text-align: left;
`;

const FullCardContent = styled.div`
  margin: 1rem 1rem 0 1rem;
  padding: 4px 4px 4px 4px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: right;
  margin: 0.5rem;
  padding: 0.5rem;
`;

const SingleCard = styled.div`
  background: #fff4f4;
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  color: #253b56;
  margin: 1rem;
`;

const SingleIcon = styled.img`
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;
