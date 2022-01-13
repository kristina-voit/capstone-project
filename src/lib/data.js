const termine = [
  {
    id: 1,
    name: "Dermazentrum München",
    datum: "15.03.2021, 16:30 Uhr",
    fachrichtung: "Dermatologie",
    adresse: [
      {
        strasse: "Albert-Roßhaupter-Strasse",
        hausnummer: "32",
        plz: "81369",
        ort: "München",
      },
    ],
    telefon: " 08959976080|",
    email: "info@dzm-muenchen.de",
    website: "https://dermazentrum-muenchen.de",
  },
  {
    id: 2,
    name: "Dr. Martin Butz",
    fachrichtung: "Zahnarzt",
    adresse: [
      {
        strasse: "Theatinerstrasse",
        hausnummer: "15",
        plz: "80333",
        ort: "München",
      },
    ],
    telefon: "089980889",
    email: "info@zahnarzt-fuenfhoefe.de",
    website: "https://www.zahnarzt-fuenfhoefe.de",
  },
];

const medikamente = [
  {
    id: 1,
    name: "Ibuprofen 400mg",
    einnahme: "",
  },
  {
    id: 2,
    name: "L-Thyroxin 150µg",
    einnahme: "",
  },
  {
    id: 3,
    name: "Cefaclor 500mg",
    einnahme: "",
  },
];

/*const stimmung = [
    {
      id: 1,
      name: ""
    },
  ];*/

export default { termine, medikamente };
