import styled from "styled-components";

function CardContent(props) {
  return (
    <FullCardContent>
      <Description>{props.datum}</Description>
      <CardTitle>{props.name}</CardTitle>
      <Description>{props.fachrichtung}</Description>
    </FullCardContent>
  );
}
export default function Card(props) {
  return (
    <div>
      <SingleCard id={props.id}>
        <CardContent
          datum={props.datum}
          name={props.name}
          fachrichtung={props.fachrichtung}
        />
      </SingleCard>
    </div>
  );
}

const CardTitle = styled.p`
  font-weight: 600;
  margin: 12px 0 0 0;
`;

const Description = styled.p`
  font-size: 14;
  margin: 8px 0 0 0;
`;

const FullCardContent = styled.div`
  padding: 4px 4px 4px 4px;
  text-align: left;
  margin: 1rem;
`;

const SingleCard = styled.div`
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #fff4f4;
  color: #253b56;
  margin: 1rem;
`;
