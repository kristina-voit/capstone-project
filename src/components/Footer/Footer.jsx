import React from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import TermineIcon from '../../images/doctor.svg'
import HomeIcon from '../../images/home.svg'
import MedikamenteIcon from '../../images/medicine.svg'
import SymptomeIcon from '../../images/symptoms.svg'

function Footer () {

  return (
<NavbarStyled>
    <NavLink to="home"><img className="home" src={HomeIcon}/></NavLink>
      <NavLink to="symptome"><img className="symptome" src={SymptomeIcon}/></NavLink>
      <NavLink to="medikamente"><img className="medikamente" src={MedikamenteIcon}/></NavLink>
      <NavLink to="termine"><img className="termine" src={TermineIcon}/></NavLink>
      </NavbarStyled>
  )
}

export default Footer;

const NavbarStyled = styled.footer`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  transform: translateY(0);
  `

