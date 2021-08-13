import React from 'react'
import styled from 'styled-components'
import FeatureInfo from './FeatureInfo'
import FeatureOverview from './FeatureOverview'
import BrandRecognition from '../assets/icon-brand-recognition.svg'
import DetailedRecords from '../assets/icon-detailed-records.svg'
import FullyCustomizable from '../assets/icon-fully-customizable.svg'
import '../utils/variables.css'

const StyledFeatureSection = styled.div`
  background-color: var(--gray);
  /* Since Navigation Bar's left and right paddings are 5rem */
  padding: 2rem 1rem 5rem 1rem;

  @media (min-width: 1440px) {
    padding: 2rem 5rem 5rem 5rem;
  }
`

const FeatureInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export default function FeatureSection() {
  return (
    <StyledFeatureSection>
      <FeatureOverview />
      <FeatureInfoWrapper>
        <FeatureInfo>
          <img src={BrandRecognition} />
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </FeatureInfo>
      </FeatureInfoWrapper>
    </StyledFeatureSection>
  )
}
