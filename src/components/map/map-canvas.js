import React from 'react';
import styled from 'styled-components';

const CanvasCon = styled.div`
  position: relative;
  border: 4px solid #166e33;
  background-color: #15d856;
  width: 800px;
  height: 500px;
`;

function MapCanvas(props) {

  return (
    <CanvasCon />
  );
}

export default MapCanvas;