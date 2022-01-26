import styled from "styled-components";


function CardContent(props) {
  return (
    <FullCardContent>
      <CardTitle>{props.name}</CardTitle>
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
        name={props.name}
          datum={props.datum}
          notizen={props.notizen}
         
        />
        
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
  margin: 12px 0 0 0;
`;

const SingleCard = styled.div`
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
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
