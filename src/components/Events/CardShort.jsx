import React from "react";
import styled from "styled-components";

function CardContent(props) {
  return (
    <FullCardContent>
      <Description>
        {props.datum}
      </Description>
      <CardTitle>{props.name}</CardTitle>
      <Description>
        {props.fachrichtung}
      </Description>
    </FullCardContent>
  );
}

export default class Card extends React.Component {
  render() {
    return (
      <div style={{ width: this.props.width + "px" }}>
        <SingleCard id={this.props.id}>
          <CardContent
            datum={this.props.datum}
            name={this.props.name}
            fachrichtung={this.props.fachrichtung}
          />
        </SingleCard>
      </div>
    );
  }
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
