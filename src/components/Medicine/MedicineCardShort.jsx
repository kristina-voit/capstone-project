import styled from "styled-components";

function CardContent(props) {
  return (
    <FullCardContent>
      <CardTitle>{props.name}</CardTitle>
    </FullCardContent>
  );
}

export default function Card(props) {
  return (
    <div style={{ width: props.width + "px" }}>
      <SingleCard id={props.id}>
        <CardContent name={props.name} />
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
  background: #f6f5fb;
  color: #253b56;
  margin: 1rem;
`;
