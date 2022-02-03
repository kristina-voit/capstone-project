import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    box-sizing: border-box;
}


body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  text-align: center;
  text-align: center;
  background: rgb(215, 212, 227);
  background: linear-gradient(
    0deg,
    rgba(215, 212, 227, 1) 0%,
    rgba(255, 255, 255, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
}

main {
  margin-bottom: 60px;
  padding-bottom: 10px;


}

details > summary {
    border-radius: 15px;
    border: none;
    color: #509b9b;
    cursor: pointer;
    font-family: "Montserrat",sans-serif;
    font-weight: bold;
    margin-left: 5px;
    margin-top: 1rem;
    padding: 0.2;
}

details > summary > * {
  display: inline;
}

h1 {
  color: #4B417A;
  font-size: 19px;
}

p {
  color: #4B417A;
}


`;

export default GlobalStyle;
