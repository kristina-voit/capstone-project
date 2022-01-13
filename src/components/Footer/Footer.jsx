import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import TermineIcon from "../../images/doctor.svg";
import HomeIcon from "../../images/home.svg";
import MedikamenteIcon from "../../images/medicine.svg";
import SymptomeIcon from "../../images/symptoms.svg";

function Footer() {
  return (
    <NavbarStyled>
      <NavLink to="home">
        <img src={HomeIcon} />
      </NavLink>
      <NavLink to="symptome">
        <img src={SymptomeIcon} />
      </NavLink>
      <NavLink to="medikamente">
        <img src={MedikamenteIcon} />
      </NavLink>
      <NavLink to="termine">
        <img src={TermineIcon} />
      </NavLink>
    </NavbarStyled>
  );
}

export default Footer;

const NavbarStyled = styled.footer`
  background: #d7d4e3;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: sticky;
  bottom: 0;
  padding: 0.25em;
`;
