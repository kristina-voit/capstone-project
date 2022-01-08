import React from "react";
import logo from '../../images/statusbar.svg';
//import styled from 'styled-components'

function Header() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const weekday = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];
  let day = weekday[current.getDay()];

  return (
    <header className="App-header">
      <img src={logo} className="Statusbar" alt="logo" />
      <h1>
        {day}, {date}
      </h1>
      <p>Kristina, wie geht es Dir heute?</p>
    </header>
  );
}

export default Header;

/*const NavbarStyled = styled.footer`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  transform: translateY(0);
  `*/
