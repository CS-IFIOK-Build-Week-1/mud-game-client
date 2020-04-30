import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as types from '../player/action-types';


function getTileSprite(type) {
  switch (type) {
    case 0:
      return 'grass';
    case 2:
      return 'room';
  }
}

function MapTile({ tile }) {
  return (
    <div
      className={`tile ${getTileSprite(tile)}`}
      style={{
        height: types.SPRITE_SIZE,
        width: types.SPRITE_SIZE,
        display: 'inline-flex',
        backgroundColor: '#143f22',
      }}
    />
  );
};

function MapRow({ tiles }) {
  return (
    <div className="row" style={{
      height: '40px',
    }}>
      {tiles.map(tile => <MapTile tile={tile} />)}
    </div>
  );
};


function MapCanvas({ tiles }) {

  return (
    <CanvasCon>
      {tiles.map(row => <MapRow tiles={row} />)}
    </CanvasCon>
  );
}

// MapCanvas.propTypes = {
//   tiles: PropTypes.number,
// };

// MapCanvas.defaultProps = {
//   tiles: undefined,
// };


export default MapCanvas;

const CanvasCon = styled.div`
  position: relative;
  /* border: 4px solid #166e33; */
  background-color: #15d856;
  width: 800px;
  height: 400px;
  margin: 0;
  padding: 0;
`;