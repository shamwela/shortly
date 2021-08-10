import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './Button'

const StyledOutput = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: gray;

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
  }
`

const LongLink = styled.span`
  @media (min-width: 1440px) {
    margin-right: auto;
  }
`

export default function Output({ longLink, shortLink }) {
  return (
    <StyledOutput>
      <LongLink>{longLink}</LongLink>
      <span>{shortLink}</span>
      <Button>Copy</Button>
    </StyledOutput>
  )
}

Output.propTypes = {
  longLink: PropTypes.string.isRequired,
  shortLink: PropTypes.string.isRequired,
}
