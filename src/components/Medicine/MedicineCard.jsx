import React from "react";
import styled from "styled-components";

function CardContent(props) {
  return (
    <div>
    <StyleCardTitle className="styleCardTitle">{props.name}</StyleCardTitle>
    <StyleCardContent className="styleCardContent">
      <StyleDescription className="styleDescription">
        {props.einnahmeMorgens}
      </StyleDescription>
      <StyleDescription className="styleDescription">
        {props.einnahmeMittags}
      </StyleDescription>
      <StyleDescription className="styleDescription">
        {props.einnahmeAbends}
      </StyleDescription>
      <StyleDescription className="styleDescription">
        {props.einnahmeNachts}
      </StyleDescription>
    </StyleCardContent>
    </div>
  );
}

export default class Card extends React.Component {
  render() {
    return (
      <div>
        <div>
          <StyleCard className="styleCard" id={this.props.id}>
            <CardContent name={this.props.name} />
            <CardContent
              einnahmeMorgens={this.props.einnahmeMorgens}
              einnahmeMittags={this.props.einnahmeMittags}
              einnahmeAbends={this.props.einnahmeAbends}
              einnahmeNachts={this.props.einnahmeNachts}
            />
          </StyleCard>
        </div>
      </div>
    );
  }
}

const StyleCardContent = styled.div`
  padding: 0px 0px 4px 0px;
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const StyleCardTitle = styled.p`
  font-weight: 600;
  padding: 0;

`;

const StyleCard = styled.div`
  border-radius: 15px;
  box-shadow: 0px 0px 8px #ccc;
  background: #fff4f4;
  color: #253b56;
  margin: 1rem;
`;

const StyleDescription = styled.p`
  font-size: 14;
  margin: 8px 0 0 0;
`;
