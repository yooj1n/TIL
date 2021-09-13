import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
 accent: "#0095f6",
 bgColor: "#FAFAFA",
 inputFontColor: "black",
 fontColor: "rgb(38,38,38)",
 borderColor: "rgb(219, 219, 219)",
};

export const darkTheme = {
  accent: "#0095f6",
  inputFontColor: "black",
  fontColor: "white",
  bgColor: "#1E1F21",
  boxColor: "#292A2D"
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input {
      all:unset;
    }
    * {
      box-sizing:border-box;
    }
    body {
        background-color: ${(props) => props.theme.bgColor};
        font-size:14px;
        font-family:'Open Sans', sans-serif;
        color: ${(props) => props.theme.fontColor};
    }
    a {
      text-decoration: none;
    }
`;