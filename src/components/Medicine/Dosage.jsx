import styled from "styled-components";
import { useState } from "react";

export default function Dosage (props) {
    const [color,setColor]=useState(true);
return (
    <Description onClick={()=>setColor(!color)} color={color}>{props.einnahmeMenge}</Description>
)
}


const Description = styled.p`
  font-size: 14;
  margin: 8px 0 0 0;
  font-weight: 600;
  color: ${(props)=> props.color ? "red" : "green"}
`;
