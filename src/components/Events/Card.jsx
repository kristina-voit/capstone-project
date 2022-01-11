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
      <StyleDescription className="styleDescription">
        {props.adresse}
      </StyleDescription>
      <StyleDescription className="styleDescription">
        {props.telefon}
      </StyleDescription>
      <StyleDescription className="styleDescription">
        {props.email}
      </StyleDescription>
      <StyleDescription className="styleDescription">
        {props.website}
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
            name={this.props.name}
            datum={this.props.datum}
            fachrichtung={this.props.fachrichtung}
            adresse={this.props.adresse}
            telefon={this.props.telefon}
            email={this.props.email}
            website={this.props.website}
          />
        </StyleCard>
      </div>
    );
  }
}

const StyleCardContent = styled.div`
  padding: 4px 16px 20px 16px;
`;

const StyleCardTitle = styled.p`
  font-weight: 600;
  margin: 12px 0px 0px 0px;
`;

const StyleCard = styled.div`
  border-radius: 8px;
  box-shadow: 0px 0px 8px #ccc;
  color: #253b56;
  margin: 12px 0px;
`;

const StyleDescription = styled.p`
  font-size: 14;
  margin: 8px 0 0 0;
`;
