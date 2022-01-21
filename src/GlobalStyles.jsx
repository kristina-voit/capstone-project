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
margin-bottom: 3rem;
  background: var(--background-one);
  font-family: 'Montserrat', sans-serif;
  /* height: 100vh; */
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
