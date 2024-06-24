import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
html{
  font-family: Inter, sans-serif;
  font-size: 10px;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    height: 100vh;
  }
`