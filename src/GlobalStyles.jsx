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
}

main {
  margin-bottom: 60px;
  padding-bottom: 10px;
  height: 100vh;
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


`;

export default GlobalStyle;
