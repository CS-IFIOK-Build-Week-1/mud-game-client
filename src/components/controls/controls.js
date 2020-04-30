import React from 'react';
import styled from 'styled-components';

import north from '../../assets/north.png';
import south from '../../assets/south.png';
import west from '../../assets/west.png';
import east from '../../assets/east.png';

const ControlCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 4px solid #08e152; */
  width: 250px;
  height: 150px;
  overflow: hidden;
  margin: 0 auto;

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

const Controls = () => {

  const moveWest = (evt) => {
    console.log('moved West!');
  };

  const moveNorth = (evt) => {
    console.log('moved North!');
  };

  const moveEast = (evt) => {
    console.log('moved East!');
  };

  const moveSouth = (evt) => {
    console.log('moved South!');
  };

  return (
    <ControlCon>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img src={north} alt="north" onClick={moveNorth} />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginRight: '2em',
          marginLeft: '2em',
        }}
      >
        <img src={west} alt="west" onClick={moveWest} />
        <img src={east} alt="east" onClick={moveEast} />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img src={south} alt="south" onClick={moveSouth} />
      </div>
    </ControlCon>
  );
};

export default Controls;
