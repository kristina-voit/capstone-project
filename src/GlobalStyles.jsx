import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    box-sizing: border-box;
}
/* :root {
  --main-background: ;
  --color-one: ;
  --color-two: ;
  --color-two: ;
} */
html {
  /* height: 100vh; */

}
body {
  background: var(--background-one);
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  text-align: center;

}

main {
  margin-bottom: 60px;
  padding-bottom: 10px;

}

details > summary {
  background: #f5f9f9;
    color: #509b9b;
    padding: 0.2;
    border: none;
    font-weight: bold;
    border-radius: 15px;
    margin-left: 5px;
    margin-top: 1rem;
    cursor: pointer;
    font-family: "Montserrat",sans-serif;
}


details > summary > * {
  display: inline;
}

h1 {
  font-size: 19px;
  color: #4B417A;
}


p {
  color: #4B417A;
}

.App {
  text-align: center;

  background: rgb(215, 212, 227);
  background: linear-gradient(
    0deg,
    rgba(215, 212, 227, 1) 0%,
    rgba(255, 255, 255, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
}


`;

export default GlobalStyle;
