//import Header from "../components/Header/Header.jsx";
import styled from "styled-components";
import IconHappy from "../../images/happy.svg"
import IconGood from "../../images/good.svg"
import IconSad from "../../images/sad.svg"
import IconSceptic from "../../images/sceptic.svg"



function Mood () {
    return (
        <Container>
          <img src={IconSad} />
       
          <img src={IconSceptic} />
       
          <img src={IconGood} />
       
          <img src={IconHappy} />
          </Container>
    );
  }

  export default Mood 

  const Container = styled.div`
  display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    //background:#f6f5fb;
    `


