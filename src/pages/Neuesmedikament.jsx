import Header from "../components/Header/Header.jsx";
import styled from "styled-components";
import NewMedicine from "../components/Medicine/NewMedicine";

const NeuesMedikament = () => {
  return (
    <div>
      <Header />
      <h1>Neues Medikament eintragen</h1>
      <div>
        <NewMedicine />
      </div>
    </div>
  );
};
export default NeuesMedikament;
