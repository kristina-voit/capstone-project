import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import SearchAppointments from "./SearchAppointments";

function Search() {
  const [state, setState] = useState({ searchTerm: "" });
  const [appointments, setAppointments] = useState(appointments);
  const onSearch = (searchTerm) => {
    setState({ searchTerm });
  };

  const { searchTerm } = state;

  return (
    <div>
      <SearchInput searchTerm={searchTerm} onSearch={onSearch} />

      {appointments
        .filter((appointments) =>
          `${appointments.name} ${appointments.datum} ${appointments.fachrichtung}`
            .toUpperCase()
            .includes(searchTerm.toUpperCase())
        )

        .map((appointments) => (
          <SearchAppointments
            key={appointments.id}
            appointments={appointments}
          />
        ))}
    </div>
  );
}

export default Search;
