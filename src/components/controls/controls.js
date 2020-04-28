import React from 'react'
import styled from 'styled-components'

import north from '../../assets/north.png'
import south from '../../assets/south.png'
import west from '../../assets/west.png'
import east from '../../assets/east.png'


const ControlCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 4px solid #08E152;
  width: 400px;
  height: 200px;
  margin-top: 2em;
  overflow: hidden;

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;


const Controls = props => {

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
  )
}

export default Controls
