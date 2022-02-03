import styled from 'styled-components';

function Header() {
  const current = new Date();
  const date = `${current.getDate()}.${
    current.getMonth() + 1
  }.${current.getFullYear()}`;

  const weekday = [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
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
  color: #4b417a;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  margin: 1.5rem;
`;
