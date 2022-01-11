import React from "react";
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

    </header>
  );
}

export default Header;



{/*<img src={logo} className="Statusbar" alt="logo" />*/}