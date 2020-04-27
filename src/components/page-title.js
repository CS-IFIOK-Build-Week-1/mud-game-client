import React from 'react'

import styled from 'styled-components'

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  color: #08E152;

  h3 {
    font-weight: 600;
    font-size: 2em;
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
