import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 1.125rem;
    color: var(--very-dark-violet);
  }

  body {
    height: auto;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }

  img {
    object-fit: cover;
  }
`

export default GlobalStyle
