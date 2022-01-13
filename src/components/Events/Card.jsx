import React from "react";
import styled from "styled-components";
import WebsiteIcon from "../../images/homepage.svg";
import CallIcon from "../../images/phone.svg";
import EmailIcon from "../../images/email.svg";

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
          />
          <Icons>
            <a target="_blank" href={this.props.website}>
              <SingleIcon
                src={WebsiteIcon}
                className="Homepage"
                alt="Homepage"
              />
            </a>
            <a href={`mailto:{this.props.email}`}>
              <SingleIcon src={EmailIcon} className="Email" alt="Email" />
            </a>

            <a href={this.props.telefon}>
              <SingleIcon src={CallIcon} className="Call" alt="Call" />
            </a>
            {/*<a href="089-123456"><SingleIcon src={CallIcon} className="Call" alt="Call" /></a>*/}
            <a href="tel:555-666-7777">555-666-7777</a>
          </Icons>
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
  background: #fff4f4;
  color: #253b56;
  margin: 1rem;
`;

const StyleDescription = styled.p`
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
