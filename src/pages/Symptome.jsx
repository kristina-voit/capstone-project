import Header from "../components/Header/Header.jsx";
import Graph from "../components/Symptoms/MoodGraph";
import Search from "../components/Symptoms/Search/Search";
import styled from "styled-components";

const Symptome = () => {
  return (
    <div>
      <Header />
      <h1>Stimmung & Symptome</h1>
      <Graph />

      <Search />
    </div>
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
