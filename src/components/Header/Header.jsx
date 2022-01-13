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
    <header>
      <h1>
        {day}, {date}
      </h1>
    </header>
  );
}

export default Header;
