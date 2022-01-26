import { useState, useEffect } from "react";
import { journaldata } from "../journaldata";
import SearchInput from "./SearchInput";
import JournalData from "../Search/JournalData";
import NewSymptom from "../NewSymptom";
import { saveToLocal, loadFromLocal } from "../../../lib/localStorage";

function Search() {
  const [state, setState] = useState({ searchTerm: "" });

  const onSearch = (searchTerm) => {
    setState({ searchTerm });
  };

  const { searchTerm } = state;

  const [symptoms, setSymptoms] = useState(journaldata);

  useEffect(() => {
    const storageData = loadFromLocal("_symptoms");
    if (storageData && storageData.length > 0) {
      setSymptoms(storageData);
    }
  }, []);

  useEffect(() => {
    saveToLocal("_symptoms", symptoms);
  }, [symptoms]);

  function addSymptom(symptom) {
    setSymptoms([...symptoms, symptoms]);
  }

  const removeItem = (symptomStimmung) => {
    const remainingSymptoms = products.filter(
      (symptom) => symptom.stimmung !== symptomStimmung
    );
    setSymptoms(remainingSymptoms);
  };

  return (
    <div>
      <SearchInput searchTerm={searchTerm} onSearch={onSearch} />

      <NewSymptom onAddSymptom={addSymptom} />

      {journaldata
        .filter((journaldata) =>
          `${journaldata.stimmung} ${journaldata.datum} ${journaldata.notizen}`
            .toUpperCase()
            .includes(searchTerm.toUpperCase())
        )

        .map((journaldata) => (
          <JournalData
            key={journaldata.id}
            journaldata={journaldata}
            onRemoveSymptom={removeItem}
          />
        ))}
    </div>
  );
}

export default Search;
