import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import '../utils/variables.css'

const StyledFeatureInfo = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  display: grid;
  grid-row-gap: 1em;
  padding: 1rem;
`

export default function FeatureInfo({ children }) {
  return <StyledFeatureInfo>{children}</StyledFeatureInfo>
}

FeatureInfo.propTypes = {
  children: PropTypes.element.isRequired,
}
