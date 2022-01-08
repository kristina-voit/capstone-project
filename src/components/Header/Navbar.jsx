
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import HomeIcon from '../images/home.svg'
import { ReactComponent as SymptomIcon } from '../images/symptoms.svg'
import MedikamenteIcon from '../images/medicine.svg'
import TermineIcon from '../images/doctor.svg'

export default function Navbar() {

    return (
        <>
            <NavbarStyled role="navigation" >
                
                <LinkStyled
                    to="/">
                    <HomeIcon alt="Link zur Homepage" />
                </LinkStyled>


                <LinkStyled
                    to="/symptome">
                    <SymptomIcon alt="Link zu Symptomen" />
                </LinkStyled>

                <LinkStyled
                    to="/medikamente" >
                    <MedikamenteIcon alt="Link zu Medikamenten" />
                </LinkStyled>

                <LinkStyled
                    to="/termine" >
                    <TermineIcon alt="Link zu Terminen" />
                </LinkStyled>

            </NavbarStyled>
        </>
    )
}

const NavbarStyled = styled.footer`
    width: 100vw;
    background-color: var(--primary-light-40);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    transform: translateY(0);
    transition: transform 0.3s ease;
  `
const LinkStyled = styled(NavLink)`
    padding: 10px;
    background: var(--primary-light-40);
    text-align: center;
    cursor: default;
    svg {
      fill: var(--secondary);
      width: 32px;
      height: 32px;
    }
    &.selected {
      background: var(--secondary);
      svg {
        fill: var(--primary-light-40);
      }
    }
  `

  //      activeClassName="selected"