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
  font-weight: 700;
  color: #fff !important;
  cursor: pointer;

  &:hover {
    background-color: var(--light-cyan);
  }

  &:disabled {
    background-color: var(--gray);
    cursor: not-allowed;
  }

  @media (min-width: 1440px) {
    width: max-content;
  }
`

export default Button
