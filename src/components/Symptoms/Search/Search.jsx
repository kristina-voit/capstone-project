import { useState } from "react";
import { journaldata } from "../journaldata";
import SearchInput from "./SearchInput";
import JournalData from "../Search/JournalData";

function Search() {
  const [state, setState] = useState({ searchTerm: "" });

  const onSearch = (searchTerm) => {
    setState({ searchTerm });
  };

  const { searchTerm } = state;

  return (
    <section>
      <SearchInput searchTerm={searchTerm} onSearch={onSearch} />
      {journaldata
        .filter((journaldata) =>
          `${journaldata.stimmung} ${journaldata.datum} ${journaldata.notizen}`
            .toUpperCase()
            .includes(searchTerm.toUpperCase())
        )
        .map((journaldata) => (
          <JournalData key={journaldata.id} journaldata={journaldata} />
        ))}
    </section>
  );
}

export default Search;
