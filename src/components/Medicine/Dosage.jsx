import styled from "styled-components";
import { useState } from "react";

export default function Dosage(props) {
  const [isColored, setIsColored] = useState(true);
  if (props.einnahmeMenge > 0) {
    return (
      <Description onClick={() => setIsColored(!isColored)} isColored={isColored}>
        {props.einnahmeMenge}
      </Description>
    );
  } else if (
    props.einnahmeMenge == 0) {
      return (
        <Description isColored={!isColored}>
          {props.einnahmeMenge}
        </Description>
      );
  } else {
    return (
      <Description onClick={() => setColor(isColored)} isColored={isColored}>
        {props.einnahmeMenge}
      </Description>
    );
  }
}

const Description = styled.p`
  font-size: 14;
  margin: 8px 0 0 0;
  font-weight: 600;
  color: ${(props) => (props.isColored ? "red" : "green")};
`;
