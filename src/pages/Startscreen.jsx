import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { keyframes } from "styled-components";
import styled from "styled-components";
import Logo from "../images/vitamed.svg";

export default function Startscreen() {
  const redirect = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      redirect("/home");
    }, 3000);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, []);
  return (
    <>
      <Container>
        <Img src={Logo} />
        <div>
          <H2>...because your health matters!</H2>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  padding: 10px 0;
`;

const slideInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  20% {
    opacity: 1;
    transform: translateY(0px);
  }
  85% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const H2 = styled.h2`
  animation: ${slideInTop} 5s ease-in infinite;
  color: #03989e;
`;

const slideDown = keyframes`

0% {
  opacity: 0;
  transform: translateY(-10px);
}
20% {
  opacity: 1;
  transform: translateY(0px);
}
85% {
  opacity: 1;
  transform: translateY(0px);
}
100% {
  opacity: 0;
  transform: translateY(100px);
}
`;

const Img = styled.img`
  animation: ${slideDown} 5s ease-in infinite;
`;
