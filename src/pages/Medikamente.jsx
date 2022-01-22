import MedicineList from "../components/Medicine/MedicineList";
import { medicineData } from "../components/Medicine/medicinedata";
import Header from "../components/Header/Header.jsx";
import styled from "styled-components";
import NewMedicine from "../components/Medicine/NewMedicine";

const Medikamente = () => {
  return (
    <div>
      <Header />
      <h1>Deine Medikamente</h1>
      <NewMedicine />
      <MedicineList data={medicineData} />
     
       
        <a
          target="_blank"
          href="https://www.apotheken-umschau.de/medikamente/wechselwirkungscheck/"
        >
          <ButtonStyle>Wechselwirkungen prüfen</ButtonStyle>
        </a>
   
    </div>
  );
};
export default Medikamente;

const ButtonStyle = styled.button`
  background: #f5f9f9;
  color: #509b9b;
  border: none;
  font-weight: bold;
  border-radius: 15px;
  margin-left: 5px;
  margin-bottom: 40px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  height: 5rem;
`;
