import { createGlobalStyle } from 'styled-components'
import { electionMapColor } from '../consts/colors'

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 16px;
    margin: 0;
    background-color: ${electionMapColor};
  }
  a {
    color: inherit;
    text-decoration: none;
  }  
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;  
  }
  p {
    margin: 0;
  }
`
