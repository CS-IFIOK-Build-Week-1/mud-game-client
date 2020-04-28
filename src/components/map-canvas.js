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

const RightCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;
`;


const GameInfoCon = styled.div`
  border: 4px solid #08E152;
  width: 400px;
  height: 300px;
`;

const ControlCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 4px solid #08E152;
  width: 400px;
  height: auto;
  margin-top: 2em;
  overflow: hidden;

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

function MapCanvas(props) {

  const moveWest = evt => {
    console.log("moved West!")
  }

  const moveNorth = evt => {
    console.log("moved North!")
  }

  const moveEast = evt => {
    console.log("moved East!")
  }

  const moveSouth = evt => {
    console.log("moved South!")
  }

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
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1em'
          }}>
            <img src={north} alt="north" onClick={moveNorth} />
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginRight: '6em',
            marginLeft: '6em'
          }}>
            <img src={west} alt="west" onClick={moveWest} />
            <img src={east} alt="east" onClick={moveEast} />
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1em'
          }}>
            <img src={south} alt="south" onClick={moveSouth} />
          </div>
        </ControlCon>
      </RightCon>
    </DashCon>
  )
}

export default MapCanvas