import React from 'react';
import styled from 'styled-components';

import Player from './player/player';

const CanvasCon = styled.canvas`
  border: 4px solid #08e152;
  width: 850px;
  height: auto;
`;

function MapCanvas(props) {
  return (
    <CanvasCon>
      <p>THe Canvas</p>
      <Player />
    </CanvasCon>
  );
}

export default MapCanvas;
