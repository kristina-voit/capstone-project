import Header from "../components/Header/Header.jsx";
import styled from "styled-components";
import NewMedicineForm from "../components/Medicine/NewMedicineForm"

const NeuesMedikament = () => {
  return (
    <div>
      <Header />
      <h1>Neues Medikament eintragen</h1>
      <div>
       
      </div>
      <div>
        <NewMedicineForm />
      </div>
    </div>
  );
};
export default NeuesMedikament;

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
