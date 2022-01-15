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
      <Description>{props.telefon}</Description>
      <Description>{props.email}</Description>
      <Description>{props.website}</Description>
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
        />
        <Icons>
          <a target="_blank" href={props.website}>
            <SingleIcon src={WebsiteIcon} alt="Homepage" />
          </a>
          <a href={`mailto:${props.email}?subject=Anfrage von Kristina Voit, *13.01.1989`}>
            <SingleIcon src={EmailIcon} alt="Email" />
          </a>

           <a href={`tel:${props.telefon}`}>
            <SingleIcon src={CallIcon} alt="Call" />
          </a>
        </Icons>
      </SingleCard>
    </div>
  );
}

const FullCardContent = styled.div`
  padding: 4px 4px 4px 4px;
  text-align: left;
  margin: 1rem;
`;

const CardTitle = styled.p`
  font-weight: 600;
  margin: 12px 0px 0px 0px;
`;

const SingleCard = styled.div`
  border-radius: 15px;
  box-shadow: 0px 0px 8px #ccc;
  background: #fff4f4;
  color: #253b56;
  margin: 1rem;
`;

const Description = styled.p`
  font-size: 14;
  margin: 8px 0 0 0;
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
