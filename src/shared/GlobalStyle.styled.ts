import styled, { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    height: 100vh;
    background-color: ${(props) => props.theme.bg};
  }

  h4{
  color: ${(props) => props.theme.primaryText};
  }
  hr{
  border-top-color: ${(props) => props.theme.primaryText};
  }
`

export const TextElement = styled.p`
  color: ${(props) => props.theme.primaryText};
  margin: 0;
`;