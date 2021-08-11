import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './Button'
import '../utils/variables.css'

const StyledOutput = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  border-radius: var(--border-radius);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: white;

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

const ShortLink = styled.span`
  color: var(--cyan);
`

export default function Output({ longLink, shortLink }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(shortLink)
  }

  return (
    <StyledOutput>
      <LongLink>{longLink}</LongLink>
      <ShortLink>{shortLink}</ShortLink>
      <Button onClick={handleCopy}>Copy</Button>
    </StyledOutput>
  )
}

Output.propTypes = {
  longLink: PropTypes.string.isRequired,
  shortLink: PropTypes.string.isRequired,
}
