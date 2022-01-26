import React from "react";
import EventsList from "../Events/EventsList"

const useSortableData = (appointments, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...appointments];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [appointments, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { appointments: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { appointments, requestSort, sortConfig } = useSortableData(props.appointments);

  return (
    <div>
      <button onClick={() => requestSort("datum")}>Nach Datum sortieren</button>

      <div>
        {appointments.map((props) => (
         
            <div>{props.datum}</div>
     
        ))}
      </div>
    </div>
  );
};

export default function Sortfunction() {
  return (
 
      <ProductTable
        appointments={[
            {
                id: 0,
                name: "Dermazentrum München",
                datum: "15.03.2021, 16:30 Uhr",
                fachrichtung: "Dermatologie",
                adresse: "Albert-Roßhaupter-Strasse 32, 81369 München",
                telefon: "08959976080",
                email: "info@dzm-muenchen.de",
                website: "https://dermazentrum-muenchen.de",
              },
              {
                id: 1,
                name: "Dr. Martin Butz",
                datum: "19.03.2021, 10:00 Uhr",
                fachrichtung: "Zahnarzt",
                adresse: "Theatinerstrasse 15, 80333 München",
                telefon: "089980889",
                email: "info@zahnarzt-fuenfhoefe.de",
                website: "https://www.zahnarzt-fuenfhoefe.de",
              },
              {
                id: 2,
                name: "Dr. Martin Butz",
                datum: "19.03.2018, 10:00 Uhr",
                fachrichtung: "Zahnarzt",
                adresse: "Theatinerstrasse 15, 80333 München",
                telefon: "089980889",
                email: "info@zahnarzt-fuenfhoefe.de",
                website: "https://www.zahnarzt-fuenfhoefe.de",
              },
              {
                id: 3,
                name: "Dr. Martin Butz",
                datum: "19.03.2022, 10:00 Uhr",
                fachrichtung: "Zahnarzt",
                adresse: "Theatinerstrasse 15, 80333 München",
                telefon: "089980889",
                email: "info@zahnarzt-fuenfhoefe.de",
                website: "https://www.zahnarzt-fuenfhoefe.de",
              },
        ]}
      />

  );
}
