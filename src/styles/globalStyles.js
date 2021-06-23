import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background: ${(props) => props.theme.colors.background1};
      font-family: ${(props) => props.theme.fonts.main};
      cursor: default;
    }
    
    a {
      text-decoration: none;
    }

    li{
      list-style: none;
    }
`;

export default GlobalStyles;
