import styled from "styled-components";
import { useState } from "react";

export default function Dosage(product) {
  const [color, setColor] = useState(true);
  if (product.einnahmeMenge > 0) {
    return (
      <Description onClick={() => setColor(!color)} color={color}>
        {product.einnahmeMenge}
      </Description>
    );
  } else if (
    product.einnahmeMenge == 0) {
      return (
        <Description color={!color}>
          {product.einnahmeMenge}
        </Description>
      );
  } else {
    return (
      <Description onClick={() => setColor(color)} color={color}>
        {product.einnahmeMenge}
      </Description>
    );
  }
}
const Description = styled.p`
  font-size: 14;
  margin: 8px 0 0 0;
  font-weight: 600;
  color: ${(props) => (props.color ? "red" : "green")};
`;
