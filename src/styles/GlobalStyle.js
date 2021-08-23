import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`body {
  background: #f2f2f2;
  color: #333;
  font-family: "Nunito";
  margin: 0px auto;
}
*{
  padding: 0;
  margin:0;
  box-sizing: border-box;
}
:root {
  --primary-white: #fff;
  --primary-orange: #f9ab00;
  --primary-dark: rgb(52, 58, 64);
  --primary-red: #ef4035;
  --primary-hover-red: #f33501;
  --primary-light-grey: #f4f4f4;
  --primary-grey: #ccd1d9;
  --primaty-dark-grey: #666666;
  --primaty-black: #000000;
  --primaty-transparent-black: rgba(0, 0, 0, 0.7);
  --primary-green: green;
  --primary-black: #000;
}
`;
export default GlobalStyle;
