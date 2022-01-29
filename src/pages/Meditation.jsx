import styled from "styled-components";
import Header from "../components/Header/Header.jsx";
import Breathe from "../Meditation/Breathe";

const Home = () => {
  return (
    <main>
      <div>
        <Breathe />
      </div>
    </main>
  );
};
export default Home;

const Greeting = styled.div`
  font-size: 20px;
`;

const ButtonStyle = styled.a`
  background: #f5f9f9;
  color: #509b9b;
  border: none;
  font-weight: bold;
  text-decoration: none;
  border-radius: 15px;
  margin-left: 5px;
  margin-top: 1rem;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
`;
