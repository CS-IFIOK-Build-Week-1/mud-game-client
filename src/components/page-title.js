import React from 'react'

import styled from 'styled-components'

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  color: #08E152;
  font-family: 'Rokkitt', serif;
  letter-spacing: 0.12em;

  h3 {
    font-weight: 500;
    font-size: 1.5em;
  }
`

const PageTitle = ({ title }) => {
  return (
    <TitleDiv>
      <h3>
        {title}
      </h3>
    </TitleDiv>
  )
}

export default PageTitle
