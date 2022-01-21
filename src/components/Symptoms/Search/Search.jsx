import { useState } from "react";
import { journaldata } from "../journaldata";
import SearchInput from "./SearchInput";
import JournalData from "../Search/JournalData";
import ModalFull from "../Modal/ModalFull";

function Search() {
  const [state, setState] = useState({ searchTerm: "" });

  const onSearch = (searchTerm) => {
    setState({ searchTerm });
  };

  const { searchTerm } = state;

  return (
    <section>
      <SearchInput searchTerm={searchTerm} onSearch={onSearch} />
      <ModalFull />
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
