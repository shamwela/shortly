import React from 'react'
import styled from 'styled-components'
import '../styles/variables.css'

const StyledMenu = styled.div`
  cursor: pointer;
`

const MenuLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: var(--grayish-violet);
  margin: 5px;

  @media (min-width: 1440px) {
    display: none;
  }
`

export default function Menu() {
  return (
    <StyledMenu>
      <MenuLine />
      <MenuLine />
      <MenuLine />
    </StyledMenu>
  )
}
