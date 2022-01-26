import Header from "../components/Header/Header.jsx";
import Search from "../components/Symptoms/Search/Search";
import styled from "styled-components";

const Symptome = () => {
  return (
    <main>
      <Header />
      <h1>Stimmung & Symptome</h1>
      <Search />
    </main>
  );
};
export default Symptome;

const ButtonStyle = styled.button`
  background: #f5f9f9;
  color: #509b9b;
  padding: 0 1.3rem;
  margin-bottom: 2rem;
  border: none;
  font-weight: bold;
  border-radius: 15px;
  margin-left: 5px;
  margin-top: 2rem;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  height: 5rem;
`;
