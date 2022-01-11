import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}
:root {
  --main-background: ;
  --color-one: ;
  --color-two: ;
  --color-two: ;
}
body {

  padding: 0;
  background: var(--background-one);
  font-family: 'Montserrat', sans-serif;
}
`;

export default GlobalStyle;