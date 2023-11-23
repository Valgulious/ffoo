import { css } from '@emotion/react';

export const globalCss = css`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }
  
  html, body {
    margin: 0;
    padding: 0;
  }

  button {
    padding: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;
    font: inherit;
    line-height: inherit;
    appearance: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  p,
  h4,
  h3,
  h2,
  h1 {
    margin: 0;
  }

  input::-ms-clear {
    display: none;
  }
`