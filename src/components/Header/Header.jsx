import styled from "styled-components";

function Header() {
  const current = new Date();
  const date = `${current.getDate()}.${
    current.getMonth() + 1
  }.${current.getFullYear()}`;

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
    <header>
      <H1>
        {day}, {date}
      </H1>
    </header>
  );
}

export default Header;

const H1 = styled.h1`
  font-size: 1.5rem;
  color: #4b417a;
  margin: 1.5rem;
  font-family: "Montserrat", sans-serif;
`;
