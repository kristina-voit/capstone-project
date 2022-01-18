import Header from "../components/Header/Header.jsx";
import styled from "styled-components";
import NewEvent from "../components/Events/NewEvent";

const NeuerTermin = () => {
  return (
    <div>
      <Header />
      <h1>Neuen Arzttermin eintragen</h1>
      <div>
        <NewEvent />
      </div>
    </div>
  );
};
export default NeuerTermin;
