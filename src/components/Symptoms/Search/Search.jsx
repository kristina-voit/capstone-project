import { useState } from "react";
import { journaldata } from "../journaldata";
import SearchInput from "./SearchInput";
import JournalData from "../Search/JournalData";
import NewSymptom from "../NewSymptom"

function Search() {
  const [state, setState] = useState({ searchTerm: "" });

  const onSearch = (searchTerm) => {
    setState({ searchTerm });
  };

  const { searchTerm } = state;

  return (
<div>
    <section>
     
      <SearchInput searchTerm={searchTerm} onSearch={onSearch} />
   
  
    </section>
    <NewSymptom />
    <section>
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
  
    </div>
  );
}

export default Search;
