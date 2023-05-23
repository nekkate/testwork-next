import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

  body {
    position: relative;
    min-height: 100%;
    font-size:  ${(props) => props.theme.fontSizeMain};
    font-family: ${(props) => props.theme.fontFamily};
    line-height: ${(props) => props.theme.lineHeight};
    font-weight: ${(props) => props.theme.fontWeight};
    color: ${(props) => props.theme.colorBlack};
    background-color: ${(props) => props.theme.colorWhite};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
