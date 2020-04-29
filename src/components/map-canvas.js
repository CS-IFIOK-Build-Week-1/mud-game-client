import React, { useEffect } from 'react'
import styled from 'styled-components'

import Player from '../components/player/player'
import { useEvent } from '../utilities/hooks/useEvent'

const CanvasCon = styled.div`
  position: relative;
  border: 4px solid #08E152;
  width: 850px;
  height: auto;
`;

function MapCanvas(props) {

  const handleKeyPress = evt => {
    if (evt.key === ' ') {
      console.log("You pressed the space bar!")
    }
  }

  useEvent('keyup', handleKeyPress)

  return (
    <CanvasCon>
      <Player />
    </CanvasCon>
  )
}

export default MapCanvas