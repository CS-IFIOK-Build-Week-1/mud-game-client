import React from 'react'
import { Link } from 'react-router-dom';

import Button from '../../components/Button'
import styled from 'styled-components'

const LandingCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  font-family: 'Rokkitt', serif;
  letter-spacing: 0.12em;
  font-size: 1.2em;

  h1 {
    margin-bottom: 1em;
  }

  p {
    font-size: 1.3em;
    margin-top: 0.5em;
    font-weight: 500;
  }
`;

const LandingPage = () => {
  return (
    <LandingCon>
      <h1>Welcome to MOVR!</h1>

      <p>A 2D Multi-player dungeon game made just for you!</p>
      <p>Multiple rooms filled with the best of things.</p>
      <p>Move through rooms and find precious artifacts!</p>

      <div>
        <Link to="/login">
          <Button buttonName="Get started >>" style={{ width: '300px' }} />
        </Link>
      </div>

    </LandingCon>
  )
}

export default LandingPage
