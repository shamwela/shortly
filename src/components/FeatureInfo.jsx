import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import '../utils/variables.css'

const StyledFeatureInfo = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  display: grid;
  justify-items: center;
  grid-row-gap: 1em;
  padding: 3rem 2rem 2rem 2rem;
  position: relative;

  & > * {
    text-align: center;
  }
`

const IconWrapper = styled.div`
  background-color: var(--dark-violet);
  width: max-content;
  display: grid;
  place-items: center;
  border-radius: 100%;
  padding: 1.2rem;
  position: absolute;
  top: -44px;
`

export default function FeatureInfo({ imageSource, title, description }) {
  return (
    <StyledFeatureInfo>
      <IconWrapper>
        <img src={imageSource} alt='' />
      </IconWrapper>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledFeatureInfo>
  )
}

FeatureInfo.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
