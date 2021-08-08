import React from 'react'
import styled from 'styled-components'
import '../utils/variables.css'

const StyledMenuIcon = styled.div`
  cursor: pointer;
`

const Line = styled.div`
  width: 25px;
  height: 3px;
  background-color: var(--grayish-violet);
  margin: 5px;

  @media (min-width: 1440px) {
    display: none;
  }
`

export default function MenuIcon({ onClick }) {
  return (
    <StyledMenuIcon onClick={onClick}>
      <Line />
      <Line />
      <Line />
    </StyledMenuIcon>
  )
}
