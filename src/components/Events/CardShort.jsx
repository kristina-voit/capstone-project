import React from "react";
import styled from "styled-components";

function CardContent(props) {
  return (
    <StyleCardContent className="styleCardContent">
      <StyleCardTitle className="styleCardTitle">{props.name}</StyleCardTitle>
      <StyleDescription className="styleDescription">
        {props.datum}
      </StyleDescription>
      <StyleDescription className="styleDescription">
        {props.fachrichtung}
      </StyleDescription>
    </StyleCardContent>
  );
}

export default class Card extends React.Component {
  render() {
    return (
      <div style={{ width: this.props.width + "px" }}>
        <StyleCard className="styleCard" id={this.props.id}>
          <CardContent
            datum={this.props.datum}
            name={this.props.name}
            fachrichtung={this.props.fachrichtung}
          />
        </StyleCard>
      </div>
    );
  }
}

const StyleCardContent = styled.div`
  padding: 4px 16px 20px 16px;
  text-align: left;
  margin: 1rem;
`;

const StyleCardTitle = styled.p`
  font-weight: 600;
  margin: 12px 0px 0px 0px;
`;

const StyleCard = styled.div`
  border-radius: 15px;
  box-shadow: 0px 0px 8px #ccc;
  background: #FFF4F4;
  color: #253b56;
  margin: 1rem;
`;

const StyleDescription = styled.p`
  font-size: 14;
  margin: 8px 0 0 0;
`;
