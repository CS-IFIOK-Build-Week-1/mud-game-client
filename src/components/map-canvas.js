import React from 'react'
import styled from 'styled-components'

import Player from '../components/player/player'

import north from '../assets/north.png'
import south from '../assets/south.png'
import west from '../assets/west.png'
import east from '../assets/east.png'


const DashCon = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 600px;
`;

const CanvasCon = styled.canvas`
  border: 4px solid #08E152;
  width: 850px;
  height: auto;
`;

const GameInfoCon = styled.div`
  border: 4px solid #08E152;
  width: 400px;
  height: 250px;
`;

const ControlCon = styled.div`
  border: 4px solid #08E152;
  width: 400px;
  height: 200px;
  margin-top: 2em;
`;

const RightCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;
`;

function MapCanvas(props) {
  return (
    <DashCon>
      <CanvasCon>
        <p>THe Canvas</p>
        <Player />
      </CanvasCon>

      <RightCon>
        <GameInfoCon>
          <p>Game Description Info</p>
        </GameInfoCon>

        <ControlCon>
          <img src={north} alt="north" />
          <img src={east} alt="east" />
          <img src={south} alt="south" />
          <img src={west} alt="west" />
        </ControlCon>
      </RightCon>
    </DashCon>
  )
}

export default MapCanvas