import React from "react";
import styled from "styled-components";

function CardContent(props) {
  return (
    <StyleCardContent className="styleCardContent">
      <StyleCardTitle className="styleCardTitle">{props.name}</StyleCardTitle>
    </StyleCardContent>
  );
}

export default class Card extends React.Component {
  render() {
    return (
      <div style={{ width: this.props.width + "px" }}>
        <StyleCard className="styleCard" id={this.props.id}>
          <CardContent name={this.props.name} />
        </StyleCard>
      </div>
    );
  }
}

const StyleCardContent = styled.div`
  padding: 4px 4px 4px 4px;
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
  background: #f6f5fb;
  color: #253b56;
  margin: 1rem;
`;
