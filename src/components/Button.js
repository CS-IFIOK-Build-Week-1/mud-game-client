import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 400px;
  margin: 0;
  margin-top: 1em;
  margin-bottom: 1em;
  height: 50px;
  background: #FAFF13;
  color: #191919;
  border: none;
  font-family: 'Rokkitt', serif;
  font-weight: 600;
  font-size: 1.1em;
  letter-spacing: 0.12em;
          
  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ buttonName }) => {
  return (
    <StyledButton type="submit">{buttonName}</StyledButton>
  )
}

export default Button
