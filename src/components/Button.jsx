import styled from 'styled-components'
import '../utils/variables.css'

const Button = styled.button`
  display: inline-block;
  width: 100%;
  border: 0;
  border-radius: 100px;
  background-color: var(--cyan);
  padding: 0.556em 1.667em;
  text-align: center;
  color: #fff !important;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  @media (min-width: 1440px) {
    width: max-content;
  }
`

export default Button
