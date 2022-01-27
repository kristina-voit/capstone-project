import styled from "styled-components";
import WebsiteIcon from "../../images/homepage.svg";
import CallIcon from "../../images/phone.svg";
import EmailIcon from "../../images/email.svg";

function CardContent(props) {
  console.log(props);
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

const FullCardContent = styled.div`
  padding: 4px 4px 4px 4px;
  margin: 1rem 1rem 0 1rem;
`;

const CardTitle = styled.p`
  font-weight: 600;
  margin: 12px 0 0 0;
  text-align: left;
`;

const SingleCard = styled.div`
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  background: #fff4f4;
  color: #253b56;
  margin: 1rem;
`;

const Description = styled.p`
  text-align: left;
`;

const Icons = styled.div`
  display: flex;
  padding: 0.5rem;
  margin: 0.5rem;
  justify-content: right;
`;

const SingleIcon = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

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
