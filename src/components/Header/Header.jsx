import React from "react";
import logo from '../../images/statusbar.svg';
import styled from 'styled-components'

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
      <h1>
        {day}, {date}
      </h1>
      <Greeting><p>Kristina, wie geht es Dir heute?</p>
      </Greeting>
    </header>
  );
}

export default Header;

const Greeting = styled.div`
//for further styling
`

{/*<img src={logo} className="Statusbar" alt="logo" />*/}