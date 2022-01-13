import React from "react";
import styled from "styled-components";
import Morning from "../../images/sunrise.svg";
import Noon from "../../images/noon.svg";
import Evening from "../../images/sunset.svg";
import Night from "../../images/night.svg";

function CardContent(props) {
  return (
    <div>
      <StyleCardTitle className="styleCardTitle">{props.name}</StyleCardTitle>
      <StyleCardTitle className="styleCardTitle">
        {props.einnahmehinweis}
      </StyleCardTitle>
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
        <IconStyling src={Morning} className="Morning" alt="Morning" />
        <IconStyling src={Noon} className="Noon" alt="Noon" />
        <IconStyling src={Evening} className="Evening" alt="Evening" />
        <IconStyling src={Night} className="Night" alt="Night" />
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
            <h4>{this.props.name}</h4>
            <p>{this.props.einnahmehinweis}</p>
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
  justify-items: center;
`;

const StyleCardTitle = styled.p`
  font-size: 8px;
  color: #4b417a;
`;

const StyleCard = styled.div`
  border-radius: 15px;
  box-shadow: 0px 0px 8px #ccc;
  background: #f6f5fb;
  color: #4b417a;
  margin: 1rem;
  padding-top: 0.1rem;
`;

const StyleDescription = styled.p`
  font-size: 14;
  margin: 8px 0 0 0;
  font-weight: 600;
`;

const Icons = styled.div`
  display: flex;
  padding: 0.5rem;
  margin: 0.5rem;
`;

const IconStyling = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;
