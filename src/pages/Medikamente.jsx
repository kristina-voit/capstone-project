import MedicineList from "../components/Medicine/MedicineList";
import { medicineData } from "../components/Medicine/medicinedata";
import Header from "../components/Header/Header.jsx";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Medikamente = () => {
  return (
    <div>
      <Header />
      <h1>Deine Medikamente</h1>
      <MedicineList data={medicineData} />
      <Container>
        <NavLink to="/neuesmedikament">
          <ButtonStyle>Neues Medikament eintragen</ButtonStyle>
        </NavLink>
        <a
          target="_blank"
          href="https://www.apotheken-umschau.de/medikamente/wechselwirkungscheck/"
        >
          <ButtonStyle>Wechselwirkungen prüfen</ButtonStyle>
        </a>
      </Container>
    </div>
  );
};
export default Medikamente;

const ButtonStyle = styled.button`
  background: #f5f9f9;
  color: #509b9b;
  padding: 0.75rem;
  border: none;
  font-weight: bold;
  border-radius: 15px;
  margin-left: 5px;
  margin-top: 1rem;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  height: 5rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin: 1rem;
  margin-bottom: 2rem;
`;
