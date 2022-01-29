import React, { useState, useEffect } from "react";
import { loadFromLocal } from "../../lib/localStorage";

export default function App() {
  const appointments = loadFromLocal("_appointments");

  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = appointments.filter((appointment) =>
      appointment.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((appointment) => (
          <li>{appointment}</li>
        ))}
      </ul>
    </div>
  );
}
