import styled from "styled-components";

function CardContent(props) {
  return (
    <FullCardContent>
      <CardTitle>{props.stimmung}</CardTitle>
      <Description>{props.datum}</Description>
      <Description>{props.notizen}</Description>
    </FullCardContent>
  );
}
export default function Card(props) {
  return (
    <div>
      <SingleCard id={props.id}>
        <CardContent
          stimmung={props.stimmung}
          datum={props.datum}
          notizen={props.notizen}
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
  margin: 1rem;
  padding: 4px 4px 4px 4px;
  text-align: left;
`;

const SingleCard = styled.div`
  background: #f5f9f9;
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  color: #253b56;
  margin: 1rem;
`;
